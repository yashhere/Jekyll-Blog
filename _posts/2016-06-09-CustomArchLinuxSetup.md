---
title: Custom Arch Linux setup with Openbox
author: Yash
date: 2016-06-11
layout: post
categories:
  - Linux
comments: true
---

After my summer vacation started, I bought a new laptop and the first thing I did was to install Arch Linux on it. After a standard arch installation procedure, I started putting together my own desktop environment starting with ArchLinux and Openbox and then piecing all pieces together to build a proper desktop environment. Building a desktop this way really follows the Unix Methodology; have softwares that each do one thing well, and  when you put them together you get something amazing.

When I first installed Arch, I had several choices. I tried xfce and gnome as my desktop environments. While both of them have their own pros and cons, I ended up liking none. The sole reason was the dependencies, these two softwares bring with them. My sole intention of installing Arch was to have something, which I control, not like Ubuntu, where you are forced to use the preinstalled softwares and when you try to uninstall something, you fear of breaking some other program.

So I end up going the route of building something up from scratch using Openbox as a base. At this point I have a fast, lightweight desktop that is extremely stable and is truly my desktop as I have built it from the ground up choosing every application.

<img class="post-image" src="/assets/img/desktop.jpg" alt="desktop" width="814" height="465" />

----

### Window Manager
After the installation of Arch, the first thing I did was to install Openbox, a Tiling Window Manager. You may also try other window managers like awesome, i3 and fluxbox etc. but I chose Openbox because it is used everywhere and thus there is a plethora of information out there about customizing it.

For our window manager to show up, it needs to be added either in a login manager or user's <code>~/.xinitrx</code> file. There is a default version of this file which contain some code which we may want to retain, so rather than making this file from scratch, copy the default version of file to user's home directory.

<code>cp /etc/X11/xinit/xinitrc ~/.xinitrc</code>

Now add the command <code>exec Openbox-session</code> to the end of the file. Remember that the lines following this command will be ignored by the system. An openbox session should be able to be started by entering the command <code>startx</code>.

An openbox session can be started automatically upon login using shell's startup script. Add following to the shell's startup script, <code>~/.bash_profile</code> for bash and <code>~/.zprofile</code> for zsh.

<code>[[ -z $DISPLAY && $XDG_VTNR -eq 1 ]] && exec startx</code>

----

### Configuring Openbox

Setting up openbox is quite simple. Four files make the basis of openbox configuration. They are <code>rc.xml</code>, <code>autostart</code>,  <code>menu.xml</code> and <code>environment</code>. These files controls everything about the window manager.

- rc.xml: Determine the behavior and settings of overall openbox session
- autostart: Contains a list of applications to be launched with window manager
- menu.xml: It makes the right click context menu of Desktop
- environment: Can be used to export and set relevant environmental variables

To configure openbox, it is necessary to create a local openbox profile in user's home directory. A global configuration can be found in <code>/etc/xdg/openbox</code> which is well documented and copying the global configuration to the user's directory will give a good starting point to customizing from.

<code>cp -R /etc/xdg/openbox ~/.config/</code>

These files can be edited by hand, although some graphical tools are also available, use of these may be desired.

----

### Themes and Appearance
[<code>obconf</code>](https://www.archlinux.org/packages/community/x86_64/obconf) and [<code>lxappearance-obconf</code>](https://www.archlinux.org/packages/community/x86_64/lxappearance-obconf/) can be used to configure appearance and theme of openbox session. There are quite a few themes available in [<code>openbox-themes</code>](https://www.archlinux.org/packages/community/any/openbox-themes/) package. My personal favorite is [<code>Numix-themes</code>](https://www.archlinux.org/packages/community/any/numix-themes/) and [<code>Numix-icon-theme-git (AUR)</code>](https://aur.archlinux.org/packages/numix-icon-theme-git/).

In order to see changes after editing a configuration file, open box needs to be refreshed. This can be done with the reconfigure command.

<code>openbox --reconfigure</code>

----

### Menus

The type and behavior of Openbox menus, accessible by right-clicking the background, can be changed using <code>~/.config/openbox/menu.xml</code> file. Openbox provides two kinds of menus, <code>Static</code>, and <code>Dynamic</code> menus (Piped and Generators)

Static menus are hard code in XML and is stored in menu.xml file. Whenever you install a new application, you will have to manually update the XML file to update the menu. This is a viable solution if the applications are bot installed on a day to day basis.

Pipe menus are the sections of openbox menu which openbox creates on the fly, by running a generic script and using its plain text output as menu entries. This scheme can used in different ways like adding a mail checker in the menu, or adding a weather forecast menu. You can check [openbox pipe menu page](http://openbox.org/wiki/Openbox:Pipemenus) for more information.

Generators are the most convenient type of menus. These can be found in most desktop environments where applications show up in the menu automatically. If applications are being installed on a regular basis, then this will probably be the preferred choice.

##### Static Menus

The process of making these menus can be automated by static menu generator like [<code>obmenu</code>](https://www.archlinux.org/packages/?name=obmenu). It will generate static menus from installed applications by looking into certain directories. Others available tools are [<code>menumaker</code>](https://www.archlinux.org/packages/?name=menumaker), [<code>obmenu</code>](https://www.archlinux.org/packages/?name=obmenu) and [<code>xdg-menu</code>](https://www.archlinux.org/packages/?name=archlinux-xdg-menu).

##### Dynamic Menus

Dynamic menus give the same kind of functionality most people are used to. So it was my preferred choice. They can be used to generate full, complex menus on the fly. One of the most popular application for generating dynamic menus is [<code>obmenu-generator (AUR)</code>](https://aur.archlinux.org/packages/obmenu-generator/). Though it is not officially connected to openbox but it is widely used.

In order to have [<code>obmenu-generator (AUR)</code>](https://aur.archlinux.org/packages/obmenu-generator/) make a menu on demand, the <code>menu.xml</code> file should contain the following code as the only entry.

<pre>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;openbox_menu&gt;
    &lt;menu id="root-menu" label="OpenBox 3" execute="/usr/bin/obmenu-generator"&gt;
    &lt;/menu&gt;
&lt;/openbox_menu&gt;
</pre>

----

### Panels and Taskbars

You can get any panel like [<code>xfce4-panel</code>](https://www.archlinux.org/packages/extra/i686/xfce4-panel/) or the simple and customizable [<code>tint2</code>](https://www.archlinux.org/packages/?name=tint2). I chose [<code>tint2</code>](https://www.archlinux.org/packages/?name=tint2) because it very closely follows the openbox spirit of having easy customization with plain configuration files. [<code>tint2</code>](https://www.archlinux.org/packages/?name=tint2) package also containg a graphical tool <code>tint2conf</code> for customizing panel and you can obviously go right to the tint2 configuration file and edit it there. This also means it is easy to pick up your configuration file and move it to another computer, or restore an old configuration since it is as simple as pasting a text document in the right place. [<code>tint2</code>](https://www.archlinux.org/packages/?name=tint2) can also have sections for each individual desktop and has various small widget like programs that can be used with it such as a calendar, [<code>gsimplecal</code>](https://www.archlinux.org/packages/community/x86_64/gsimplecal/), a volume application, [<code>volumeicon</code>](https://www.archlinux.org/packages/?name=volumeicon), a battery indicator, [<code>cbatticon</code>](https://www.archlinux.org/packages/?name=cbatticon), a network indicator like [<code>wicd</code>](https://www.archlinux.org/packages/extra/any/wicd/) which also have a system tray icon and a mini task tray. To start [<code>tint2</code>](https://www.archlinux.org/packages/?name=tint2) with openbox, you need to add <code>tint2 &</code> to the <code>autostart</code> file.

----

### File Manager

Some file managers deeply integrate into desktop environments and when installed with openbox, they end up pulling multiple dependencies which is certainly not desired. Our aim behind building openbox setup was to have minimum dependencies so that we can get lightweight desktop. However, there are several file managers available which fit into openbox very well. In my choice, [<code>pcmanfm</code>](https://www.archlinux.org/packages/?name=pcmanfm) is the best choice here. [<code>pcmanfm</code>](https://www.archlinux.org/packages/?name=pcmanfm) is a lightweight and fast file manager with network and thrash support. [<code>pcmanfm</code>](https://www.archlinux.org/packages/?name=pcmanfm) can also manage desktop icons and wallpaper setting, although if you plan to use conky in your system, then you may not want [<code>pcmanfm</code>](https://www.archlinux.org/packages/?name=pcmanfm) to manage desktop for you. The reason is that [<code>pcmanfm</code>](https://www.archlinux.org/packages/?name=pcmanfm) treats desktop as a window, so when you switch to desktop, the conky hides behind the desktop window. To get the icons and wallpaper, you can use other standalone tools such as [<code>idesk</code>](https://www.archlinux.org/packages/community/x86_64/idesk/) and [<code>feh</code>](https://www.archlinux.org/packages/extra/x86_64/feh/) or [<code>nitrogen</code>](https://www.archlinux.org/packages/extra/x86_64/nitrogen/).
To start pcmanfm is desktop mode, add the following to the autostart file

<code>pcmanfm --desktop &</code>

and to stop it for managing desktop

<code>pcmanfm --desktop-off &</code>

In order to use many of the functions that are in file managers it is necessary to have a a few additional programs. [<code>gvfs</code>](https://www.archlinux.org/packages/?name=gvfs) gives you the ability to mount volumes and have trash control. It is not mandatory to have, but it allows on demand mounting to be done completely within the file manager, as opposed to having to drop down to the command line. A volume manager such as [<code>udisks2</code>](https://www.archlinux.org/packages/?name=udisks2) will also be wanted, and for auto-mounting removable disks, [<code>udiskie</code>](https://www.archlinux.org/packages/community/any/udiskie/) works well with openbox. [<code>udiskie</code>](https://www.archlinux.org/packages/community/any/udiskie/) can be added to openbox’s autostart file like any other application.

----

### Composition

Openbox does not provide native support for composition, although having a compositor may prevent screen flickering and other distorting with applications like [<code>oblogout</code>](https://www.archlinux.org/packages/community/any/oblogout/). There are some options which work great with openbox. The one which I am using and quite happy with, is [<code>compton</code>](https://wiki.archlinux.org/index.php/Compton). It can be used with or without any initial configuration, although there are lot of different configuration options if you decide to customize the setup. To start [<code>compton</code>](https://wiki.archlinux.org/index.php/Compton) in background with shadows, use this in <code>autostart</code> file.
<code>compton -b -c &</code>.

----

### Wrapping up

While setting up my desktop using openbox ended up being much more work than I could have with normal desktop environments. But now I have much more stable desktop, about which I know, what is running in my system, and that my system is not cluttered with any software that I never use.

While it might not be for everybody having to configure every little bit of the desktop, I truly feel I have ended up with a great user experience, and a system that is customized exactly to fit my needs.

----

### References

- [Arch Linux Wiki](https://wiki.archlinux.org/)
