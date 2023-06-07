---
layout: links
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_links

# publish date (used for seo)
# if not specified, site.time will be used.
#date: 2022-03-03 12:32:00 +0000

# for override items in _data/lang/[language].yml
#title: My title
#button_name: "My button"
# for override side_and_top_nav_buttons in _data/conf/main.yml
#icon: "fa fa-bath"

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-03-03 12:32:00 +0000
# check the meta_common_description in _data/owner/[language].yml
#meta_description: ""

# optional
# please use the "image_viewer_on" below to enable image viewer for individual pages or posts (_posts/ or [language]/_posts folders).
# image viewer can be enabled or disabled for all posts using the "image_viewer_posts: true" setting in _data/conf/main.yml.
#image_viewer_on: true
# please use the "image_lazy_loader_on" below to enable image lazy loader for individual pages or posts (_posts/ or [language]/_posts folders).
# image lazy loader can be enabled or disabled for all posts using the "image_lazy_loader_posts: true" setting in _data/conf/main.yml.
#image_lazy_loader_on: true
# exclude from on site search
#on_site_search_exclude: true
# exclude from search engines
#search_engine_exclude: true
# to disable this page, simply set published: false or delete this file
#published: false


# you can always move this content to _data/content/ folder
# just create new file at _data/content/CV/[language].yml and move content below.
###########################################################
#                CV Page Data
###########################################################
page_data:
  main:
    header: "Curriculum Vitae"
    info: "PDF disponibile qui"
    pdf: "https://github.com/SimoneDeBonis/SimoneDeBonis.github.io/raw/main/assets/pdf/CV_Simone_De_Bonis_ita.pdf"

  # To change order of the Categories, simply change order. (you don't need to change list order.)
  category:
    - title: "Istruzione"
      type: id_istruzione
      color: "#2C74B3"

    - title: "Esperienza"
      type: id_programming
      color: "#5BC0F8"

    - title: "Formazione"
      type: id_formazione
      color: "#0081C9"

    

  list:


    # istruzione
    - type: id_istruzione
      title: "Data Science per l'Economia e le Imprese"
      url: ""
      info: "Computational statistics, Big Data Engineering, Big Data Econometrics."
      date: "2021-2023, Ancona"

    - type: id_istruzione
      title: "Economia, Mercati e Istituzioni"
      url: ""
      info: "Statistica, Econometria, Finanza Aziendale."
      date: "2017-2021, Bologna"

    - type: id_istruzione
      title: "Liceo Scientifico"
      url: ""
      info: "interessi principali fisica e informatica"
      date: "2012-2017, Ferrara"

    # Formazione
    - type: id_formazione
      title: "Artificial Intelligence & Machine Learning"
      url: "https://app.myopenbadge.com/receive/FvZtgrxBNEc-6e7e1bc881c70fd0eeed0ab7f35f3b0c-d3m8KeZqx-51641983520/heIx-44b5361112e0b13a7cb64e3e1a062ef0-lqmF5u7A-8/public"
      info: ""
      date: "IFOA, 60 ore"

    - type: id_formazione
      title: "Applicazioni di Deep Learning"
      url: "https://app.myopenbadge.com/receive/FvZtgrxBNEc-6e7e1bc881c70fd0eeed0ab7f35f3b0c-d3m8KeZqx-51641983520/BiIfnvezJ-0034b39650acd254eb26916bcabc6800-3cUvBJxMthsm-2/public"
      info: ""
      date: "IFOA, 60 ore"

    - type: id_formazione
      title: "Marketing Analytics & Business Intelligence"
      url: "https://app.myopenbadge.com/receive/FvZtgrxBNEc-6e7e1bc881c70fd0eeed0ab7f35f3b0c-d3m8KeZqx-51641983520/grhHFS-9be5fb854c73a297d744009314116fbc-9NvfF3GcXQ-2/public"
      info: ""
      date: "Forpin, 120 ore"

    -
    # Esperienza
    - type: id_programming
      title: "Tirocinio di ricerca"
      url: ""
      info: ""
      date: "Aprile 2023, UNIVPM"

    - type: id_programming
      title: "Freelancer"
      url: ""
      info: ""
      date: "Aprile 2023"
---
