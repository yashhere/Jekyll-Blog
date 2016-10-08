---
title: Linux init Systems
author: Yash
date: 2016-07-07
layout: post
categories:
  - Linux
  - Kernel
comments: true
published: false
---

The first thing, the Kernel do after getting control from the boot-loader, is to start the <kbd>init</kbd> process. Hence <kbd>init</kbd> is the direct or indirect ancestor of all the processes running on your linux system. <kbd>init</kbd> process is the last step in the boot process. It runs as a daemon and typically identified by the process id "1".


<blockquote cite="https://www.linux.com/news/introduction-services-runlevels-and-rcd-scripts">
A Linux service is an application (or set of applications) that runs in the background waiting to be used, or carrying out essential tasks.</blockquote>

These services can be native to operating system or as a part of applications.
Examples of typical services are Apache and MySQL. You will generally be unaware of services until you need them.

All services are supposed to run continuously to make sure that every other process which depends on them works correctly. These can be our web servers, databases, mail servers, and many more. Although there is no substitute of continuous monitoring of your system, the way these services are handled by the system daemons, also known as init systems, may help you in minimizing the damage. There is no single and perfect init system, it all depends on the services and the service management daemon that ships with your Linux distribution.

I'll be talking about three init systems, which are most common ones:

- System V init
- Upstart
- Systemd

### System V
System V is an older init system. The most common Linux distributions having this init system are Debian 6, Ubuntu 9.04 and CentOS 5. System V init process starts every process serially, i.e. new task starts only if the startup of previous task was successful. This often causes unnecessary delay and long booting time.
You can see if your system uses system V by typing:

```which service```


```/usr/sbin/services```

If you get the above output, then your system has System V.

To start a service(say xyz) using System V, type:

```service xyz start```

to stop a service, type:

```service xyz stop```

In a similar fashion, you can restart, reload, services, check status of any service. To check the status of all services at once, type:

```service --status-all```

    [ + ]  acpid
    [ - ]  anacron
    [ + ]  apache2
    [ - ]  apparmor
    [ ? ]  apport
    [ + ]  avahi-daemon
    [ + ]  bluetooth
    [ - ]  brltty
    [ ? ]  console-setup
    [ + ]  cron
    [ + ]  cups
    ...
    
"+" means that the service is started, "-" means that the service is stopped and the "?" means that system V does not know about this process. It most probably means that the service is managed by some other init system.


TODO runlevels
