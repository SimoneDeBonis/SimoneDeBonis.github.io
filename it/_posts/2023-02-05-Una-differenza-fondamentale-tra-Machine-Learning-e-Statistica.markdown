---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: EconML
title: Una Differenza fondamentale tra Machine Learning e Statistica

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
#author: ""
# multiple category is not supported
category: auto generated
# multiple tag entries are possible
tags: [Theory, test]
# thumbnail image for post
img: ":MLvsStat.jpg"
# disable comments on this page
comments_disable: true

# publish date
date: 2023-02-05 12:35:04 +0900

# seo
# if not specified, date will be used.
#meta_modify_date: 2021-08-11 12:35:04 +0900
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
---

{%- comment -%} Please delete below and place your page content here {%- endcomment -%}

{%- include util/auto-content-generator.liquid -%}

<!-- outline-start -->

I strongly recommend watching these two videos by Josh Angrist
- [What's the Difference Between Econometrics and Data Science?](https://www.youtube.com/watch?v=2EhRT2mOXm8&t=3s)
- [What’s the Difference Between Econometrics and Statistics?](https://www.youtube.com/watch?v=uVrr_-UUgWk)


The error of a supervised learning algorithm has three components:

- Bias: error caused by erroneous assumptions
- Variance: error caused by overfitting
- Noise: irreducible error, due to the random nature of the variable


A central problem in classical statistics (Econometrics) is to find the MVUE, the estimator with minimum variance among all unbiased estimators.

Suppose all assumptions of Gauss-Markov theorem holds, OLS is the BLUE but it doesn't mean it yield the minimum MSE, indeed there are non linear biased estimator (james-stein estimator) with lower variance and linear biased estimator with lower MSE (Ridge, Lasso). 

A central problem in Machine Learning (ML) is to minimize overall errors: capture the regularities in the data (low bias), while generalizing well to unseen data (low variance).

Econometric models are willing to sacrifice performance in exchange for zero bias while ML models find a balance between bias and variance, in order to maximize performance.



ML methods can achieve lower MSE than Econometric models through Cross-validation, Complexity reduction, Regularization, Feature selection, dimensionality reduction and Ensemble methods (Bootstrap aggregation (Bagging),Boosting and Stacking).


<!-- outline-end -->

{{ website_info_text_second }}
