---
title: Installing MySQL for Rails on Fedora 37
description: How to install MySQL in Podman on Fedora 37
slug: install-mysq-rails-fedora
date: 2023-04-06 22:27:00+1000
categories:
    - Software Development
tags:
    - VueJS
    - Web Development
---

## Introduction

Recently I started dabbling in using Ruby on Rails (RoR) to create a personal site for my own private use. And also to learn more!

As someone who has quite a bit of experience using MySQL I decided to use MariaDB (the fork of MySQL) as my database for my site over the default SQLite3 when creating a new Rails project. For this we just need to install the `mysql2` gem and run `bundle install`. Easy right? WRONG!! I came across a bit of an issue which took me a bit of googling to figure out so I decided to document it here.

## The issue

I decided to install Mariadb in Podman (containers are life!). Since I use Fedora (37), this was really easy following the [Fedora Docs](https://docs.fedoraproject.org/en-US/quick-docs/installing-mysql-mariadb/).

The next step is to specify `mysql2` in the Gemfile of the application and then run `bundle install`. I ran into the following issue doing this:

```
Installing mysql2 0.5.5 with native extensions
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.

    current directory: /home/anurag/.ruby/gems/ruby/3.1.0/gems/mysql2-0.5.5/ext/mysql2
/usr/bin/ruby -I /usr/share/rubygems extconf.rb
checking for rb_absint_size()... yes
checking for rb_absint_singlebit_p()... yes
checking for rb_gc_mark_movable()... yes
checking for rb_wait_for_single_fd()... yes
checking for rb_enc_interned_str() in ruby.h... yes
*** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary
libraries and/or headers.  Check the mkmf.log file for more details.  You may
need configuration options.
```

HUH?! What does that error even mean? It did give me a hint as to what might have gone wrong (missing headers). So off to Google I go. After a bit of trial and error of different solutions (many for Ubuntu based distros), I came across the solution on none other than [StackOverflow](https://stackoverflow.com/questions/2602444/problem-installing-mysql-gem-on-fedora). The issue was that I had to install the `mysql-devel` package on Fedora, which I presume had the missing headers that the gem required to install MySQL.

I ran `sudo dnf install mysql-devel` and ran `bundle install` again and it worked!! HUZZAH! :)

Anyway, this was just a quick post about the issue I came across so that it serves as future reference if I ever run into this again (or anyone else for that matter)!.
