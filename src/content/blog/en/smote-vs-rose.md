---
title: "How to Balance Your Data: SMOTE vs. ROSE"
description: "An empirical and methodological look at synthetic oversampling techniques for imbalanced classification in municipal default prediction."
date: 2022-03-03
lang: "en"
slugId: "smote-vs-rose"
category: "Data Science"
tags: ["Data Science", "Machine Learning", "Imbalanced Data", "Classification"]
image: "/assets/img/posts/balance.jpg"
readingTime: 3
---

In our [Italian Municipalities Default Prediction project](/projects/italian-municipalities-default), we trained Support Vector Machines (SVM) and Multi-Layer Perceptrons (MLP) to detect financial distress in local governments. Because municipal defaults are rare events, the raw dataset exhibited severe **class imbalance**.

When the minority class represents only a small fraction of observations, standard empirical risk minimization biases classifiers toward predicting the majority class, yielding high overall accuracy but poor recall (sensitivity) on the default events that actually matter.

## How Synthetic Resampling Approaches Work

### 1. Random Under/Over-Sampling
- **Under-sampling** discards majority-class instances, risking the loss of informative boundary points.
- **Naive Over-sampling** duplicates minority instances with replacement, which often causes severe overfitting around specific minority points.

### 2. SMOTE (Synthetic Minority Over-sampling Technique)
Introduced by Chawla et al. (2002), **SMOTE** generates synthetic minority examples by interpolating in feature space along the line segments joining each minority instance $x_i$ to its $k$ nearest minority neighbors $x_{zi}$:

$$
x_{\text{new}} = x_i + \lambda (x_{zi} - x_i), \quad \lambda \sim \mathcal{U}(0, 1)
$$

This expands the minority decision region rather than shrinking it around duplicate points.

### 3. ROSE (Random Over-Sampling Examples)
Proposed by Menardi and Torelli (2014), **ROSE** takes a smoothed bootstrap approach based on kernel density estimation. Instead of restricting synthetic points strictly to line segments between neighbors, ROSE draws observations from a conditional kernel density estimate centered around class instances with a smoothing bandwidth matrix $H_j$.

## Key Takeaways from Our Empirical Comparison

- **Always resample strictly inside the training folds** during cross-validation; resampling before splitting leaks synthetic neighbors into the validation set and produces overly optimistic F1/AUC scores.
- **SMOTE** performed reliably with SVM and tree-based models when continuous financial ratios were properly standardized.
- **ROSE** provided smoother probability calibration when features included continuous macroeconomic and balance-sheet ratios with noisy class overlap.
