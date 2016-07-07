---
title: Linux Init Systems
author: Yash
date: 2016-07-07
layout: post
categories:
  - Linux
  - Kernel
comments: true
---

The first thing, the Kernel do after getting control from the bootloader, is to start the init process. Hence init is the direct or indirect ancestor of all the processes running on your linux system. Init process is the last step in the boot process and is identified by the process id "1".

A Linux service is an application (or set of applications) that runs in the background waiting to be used, or carrying out essential tasks. I've already mentioned a couple of typical ones (Apache and MySQL). You will generally be unaware of services until you need them.
