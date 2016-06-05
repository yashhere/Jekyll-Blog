---
layout: default
title: Archive
<!--permalink: /archive/-->
---


<div class="container">
<div class="row">
  <div class="text-center">
    <ul class="list" style="margin-top: -2%; margin-bottom: -2%;">
       {% for post in site.posts %}
        <li class="description">
            <div class="datetime">
                <span class="day">
                    {{ post.date | date: "%d" }}
                </span>
                <span class="month-year">
                    {{ post.date | date: "%B %Y" }}
                </span>
            </div>
            <div class="post-details">
                <h2 class="title">
                    <a href="{{ site.url }}{{ post.url }}">
                        {{ post.title }}
                    </a>
                </h2>
            </div>
        </li>
        <div class="divider"></div>
       {% endfor %}
    </ul>
  </div>
</div>
</div>