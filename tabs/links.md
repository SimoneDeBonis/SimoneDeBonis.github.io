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
# just create new file at _data/content/links/[language].yml and move content below.
###########################################################
#                Links Page Data
###########################################################
page_data:
  main:
    header: "Links"
    info: "Your Links page description."

  # To change order of the Categories, simply change order. (you don't need to change list order.)
  category:
    - title: "Istruzione"
      type: id_Istruzione
      color: "gray"
    - title: "Formazione"
      type: id_formazione
      color: "#F4A273"
    - title: "Esperienza"
      type: id_Esperienza
      color: "#62b462"

  list:
    -
    # Esperienza
    - type: id_esperienza
      title: "IVECO"
      url: "www.google.it"
      info: "Tesi di laurea banale"
    - type: id_esperienza
      title: "GeDinfo"
      url: "www.google.it"
      info: "Machine Learning per cybersecurity"
    - type: id_esperienza
      title: "AlmaCube"
      info: "Corsi di formazione in ambito startup"

    # Istruzione
    - type: id_Istruzione
      title: "UNIVPM 2021-2023"
      url: "www.google.it"
      info: "Data Science per l'Economia e le Imprese."
    - type: id_Istruzione
      title: "UNIBO 2017-2021"
      info: "Economia, Mercati e Istituzioni"
    - type: id_Istruzione
      title: "A. Roiti 2012-2017"
      url: "www.google.it"
      info: "Liceo Scientifico, Ferrara"

    # formazione
    - type: id_formazione
      title: "IFOA"
      url: "www.google.it"
      url: ""
      info: "Artificial Intelligence & Machine Learning"
   - type: id_formazione
      title: "IFOA"
      url: "www.google.it"
      url: ""
      info: "Applicazioni di Deep Learning"
   - type: id_formazione
      title: "Forpin"
      url: "www.google.it"
      info: "Marketing Analytics & Business Intelligence"
---
