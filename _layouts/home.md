---
# Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: default
# main page (index.html)

---
{%- include multi_lng/get-pages-by-lng.liquid pages = site.posts -%}


{%- if page.img %}
  {%- if site.data.conf.others.home.header_img_with_img_tag == true -%}
    {%- capture home_img_tag -%} <img src="{{ page.img }}" /> {%- endcapture -%}
    {%- capture home_img_background_style -%} style="height: unset;" {%- endcapture -%}
  {% else %}
    {%- capture home_img_background_style -%} style="background-image:url('{{ page.img }}');" {%- endcapture -%}
  {%- endif -%}
{%- endif -%}


<div class="multipurpose-container home-heading-container">
  <div class="home-heading" {{ home_img_background_style }}>
    {{ home_img_tag }}
    <div class="home-heading-message">
      {%- if site.data.owner[lng].home.top_header_line2 %}
        <br>
      {% endif -%}
    </div>
  </div>
  <div class="home-intro-text markdown-style">
    {{ content  }}
  </div>
</div>

{%- assign lng = get_lng -%}
{% capture content1 %}{% include work/AI_{{lng}}.md %}{% endcapture %}
<div class="multipurpose-container about-container">
  <div class="row about-main">
    <div class="col-md-3 about-img">
      <img src="assets/img/home/AI.jpg" alt="">
    </div>
    <div class="col-md-9 about-header">
      <h1 translate="no"><a href="https://simonedebonis.github.io/dla">Deep Learning Algorithms</a></h1>
      <div class="meta-container">
          <p class="sub-title">
            <i class="{{ 'fa-fw ' }}{{ site.data.conf.others.about.sub_title_icon }}" aria-hidden="true"></i>
            &nbsp;{{ lng }}
          </p>
      </div>
    </div>
  </div>
  <div class="row about-divider">
    <hr>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="home-intro-text markdown-style">
        {{ content1 | markdownify }}
      </div>
    </div>
  </div>
</div>

{% capture content2 %}{% include work/ML_{{lng}}.md %}{% endcapture %}
<div class="multipurpose-container about-container">
  <div class="row about-main">
    <div class="col-md-3 about-img">
      <img src="assets/img/home/ML.jpg" alt="">
    </div>
    <div class="col-md-9 about-header">
      <h1 translate="no"><a href="https://simonedebonis.github.io/dsa">Data Science Algorithms</a></h1>
      <div class="meta-container">
          <p class="sub-title">
            <i class="{{ 'fa-fw ' }}{{ site.data.conf.others.about.sub_title_icon }}" aria-hidden="true"></i>
            &nbsp;{{ page.ml }}
          </p>
      </div>
    </div>
  </div>
  <div class="row about-divider">
    <hr>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="home-intro-text markdown-style">
        {{ content2 | markdownify }}
      </div>
    </div>
  </div>
</div>

{% capture content3 %}{% include work/TS_{{lng}}.md %}{% endcapture %}
<div class="multipurpose-container about-container">
  <div class="row about-main">
    <div class="col-md-3 about-img">
      <img src="assets/img/home/TS.jpg" alt="">
    </div>
    <div class="col-md-9 about-header">
      <h1 translate="no"><a href="https://simonedebonis.github.io/tsa">Time Series Analysis</a></h1>
      <div class="meta-container">
          <p class="sub-title">
            <i class="{{ 'fa-fw ' }}{{ site.data.conf.others.about.sub_title_icon }}" aria-hidden="true"></i>
            &nbsp;{{ page.ts }}
          </p>
      </div>
    </div>
  </div>
  <div class="row about-divider">
    <hr>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="home-intro-text markdown-style">
        {{ content3 | markdownify }}
      </div>
    </div>
  </div>
</div>

<div class="multipurpose-container new-posts-container">
  <h1>{{ site.data.lang[lng].home.new_posts_title }}</h1>
  <ul class="new-posts">
  {%- for _post in lng_pages limit: site.data.conf.others.home.new_posts_count_limit -%}
    <li>
      {%- assign page_title = _post.title -%}
      {%- include util/auto-content-post-title-rename.liquid title = page_title -%}
      {%- include multi_lng/get-localized-long-date-format.liquid date = _post.date -%}
      <a href="{{ site.baseurl }}{{ _post.url }}">{{ page_title }}
        <span>{{ _post.date | date: out_date_format }}</span>
      </a>
    </li>
  {% endfor -%}
    <li>
      {%- include multi_lng/get-page-by-layout.liquid layout = 'archives' -%}
      <a href="{{ site.baseurl }}{{ layout_page_obj.url }}">{{ site.data.lang[lng].home.new_posts_show_more_button }}</a>
    </li>
  </ul>
</div>






