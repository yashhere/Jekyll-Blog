---
title: Wanna get insulted by sudo
date: 2016-04-03T12:20:36+00:00
author: Yash
layout: post
permalink: /2016/04/wanna-get-insulted-by-sudo/
categories:
  - Linux
comments: true
---
<p style="text-align: left;">
  You might have tried many linux easters eggs for fun, but you are going to love this hack which makes sudo insult you.
</p>

<p style="text-align: left;">
  Confused what I am talking about? Here, take a look at this gif to get a idea of how sudo can insult you for typing in the incorrect password.
</p>

  <img class="post-image" src="/img/blog/insult.gif" alt="insult" width="814" height="465" />

<p style="text-align: left;">
  Now you might be thinking, why would anyone want to take insult? Afterall, nobody likes being insulted. For me, it is just another way to have fun with linux, and anyway this is way better than the plain &#8220;You entered a wrong password&#8221; error message. So let&#8217;s learn how to do this.
</p>

<h2 style="text-align: left;">
</h2>

<h2 style="text-align: left; font-family: cabin;">
  <strong>Enable insults in sudo</strong>
</h2>

You can enable the insults feature in sudo by modifying the sudo configuration file. To open the sudo configuration file, launch a terminal and type the following command

<code>sudo visudo</code>

It will open /etc/sudoers configuration file in the terminal, in vim text editor if you have configured it as your default editor. In ubuntu like distros, it will be opened in nano. Now you will have to find the section where the defaults are listed. Most probably you will find it at the top. Now find the line that starts with **_Defaults_** and append **_insults_** to the end of the line (any addition to the line is comma seperated). If this line is not present then add following line to the section

<code>Defaults insults</code>

(Always use visudo as it has a self-check system which will save you from messing up things)

Now save the file. If you are using vim then use Ctrl+X to save the file and quit the editor and if you are using nano then use Ctrl+X to quit the editor. At the time of quitting, it will ask you if you want to save the changes. To save the changes, press Y.

&nbsp;

<img class="post-image" src="/img/blog/sudoers.png" alt="Sudoers Configuration File" width="814" height="465" />

Once you have saved the file, go to terminal and type the following command to clear the old password from sudo memory

<code>sudo -k</code>

That&#8217;s all. Use any command with sudo. Deliberately type wrong password and enjoy abusing&#8230;
