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
System V is an older init system. The most common Linux distributions having this init system are Debian 6, Ubuntu 9.04 and CentOS 5.
