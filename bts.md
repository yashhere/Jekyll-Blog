---
layout: page
title: Behind The Scenes
permalink: /Behind_the_scenes/
---

Welcome to theyashagarwal.me!
===================

<!--I'm Yash Agarwal, a 3<sup>rd</sup> year undergraduate at <a href="http://nitc.ac.in" class="post-link">National Institute of Technology, Calicut</a>. I feel quite humbled that you consider my introduction worthy of your time.-->

When I decided to make this blog, I knew only about <a href="https://wordpress.org/" class="post-link">Wordpress</a>. So I set up my blog in wordpress. But the performance was not upto my expectations. The server side clumsy code and the tedious work of editing the themes made my life tough. It was then that I heard of <a href="http://jekyllrb.com/" class="post-link">Jekyll</a>.

> Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.


#### Jekyll has quite a few advantages which I was looking for:

- I could write posts directly in markdown which is quite efficient and easy and beautiful.
- Ability to host it on a reliable server like <a href="https://github.com" class="post-link">Github</a> for free, although I chose <a href="https://gitlab.com" class="post-link">Gitlab</a> over Github for some obvious reasons.
- Pages are just HTML, CSS and JavaScript code, so there are no requests going back and forth, which makes it quite fast.
- It completely supports <a href="https://git-scm.com" class="post-link">Git</a>, which means I would have complete version control over the website.

#### So why did I ditch Github for Gitlab
Github has done a nice thing with their github-pages feature and it has HTTPS support also, but there is one downside. You cannot use their TLS certificate with custom domain names. This reason was enough for me to shift to Gitlab.
Gitlab is almost similar to Github, but with unlimited private repositories, custom domain support for user/group/Project pages and many more. It can also host any static site generator like Jekyll, Hugo and the major advantage it that there is a <code>.gitlab-ci.yml</code> file in which you can define all the commands you want to run before the final build. That is a very nice feature as it gives you the power of installing any plugins something which github still misses. On top of everything you can import your TLS certificate with your custom domain name which makes connection between you and user encrypted.
<!--

#### So How did I start

Jekyll has a big number of themes, mostly all of them are published on Github. Although I decided to go with my own theme.
You can start a new project with<br />
<code>jekyll new  "your-project-name"</code><br />
A basic Jekyll site usually looks something like this:
<pre>
.
├── about.md
├── _config.yml
├── css
│   └── main.scss
├── feed.xml
├── _includes
│   ├── footer.html
│   ├── header.html
│   ├── head.html
│   ├── icon-github.html
│   ├── icon-github.svg
│   ├── icon-twitter.html
│   └── icon-twitter.svg
├── index.html
├── _layouts
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _posts
│   └── 2016-06-05-welcome-to-jekyll.markdown
├── _sass
│   ├── _base.scss
│   ├── _layout.scss
│   └── _syntax-highlighting.scss
└── _site
    ├── about
    │   └── index.html
    ├── css
    │   └── main.css
    ├── feed.xml
    ├── index.html
    └── jekyll
        └── update
            └── 2016
                └── 06
                    └── 05
                        └── welcome-to-jekyll.html
</pre>
You can get more information on the directories <a href="https://jekyllrb.com/docs/structure/" class="post-link">here</a>.-->
