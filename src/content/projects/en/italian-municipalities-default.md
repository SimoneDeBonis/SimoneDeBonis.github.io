---
title: "Italian Municipalities Default Prediction"
description: "Early warning machine learning system using Support Vector Machines (SVM), Multi-Layer Perceptrons (MLP), and synthetic class balancing (SMOTE & ROSE) to predict municipal financial distress."
date: 2023-03-13
lang: "en"
slugId: "italian-municipalities-default"
category: "Data Science"
tags: ["SVM", "MLP", "SMOTE & ROSE", "Credit Risk", "Data Science", "Machine Learning"]
image: "/assets/img/projects/Qlik/napoli.jpg"
externalUrl: "https://simonedebonis.github.io/Projects/Default/"
featured: true
---

Financial distress (*dissesto finanziario*) in local governments carries severe socio-economic consequences for citizens and public services. In this collaborative university research project, we designed an **early warning classification system** to detect Italian municipalities at risk of financial default ahead of time.

## Methodology & Modeling Pipeline

1. **Feature Engineering & Financial Ratios:**
   - Extracted balance-sheet, demographic, debt-sustainability, and revenue-collection indicators across Italian municipalities.
   - Standardized continuous accounting indicators and handled missing structural records.
2. **Addressing Severe Class Imbalance (`SMOTE` vs. `ROSE`):**
   - Because municipal default is a rare tail event, naive classifiers suffer from near-zero recall on the minority class.
   - We conducted a systematic comparison of **SMOTE** (*Synthetic Minority Over-sampling Technique*) and **ROSE** (*Random Over-Sampling Examples*) applied strictly inside training folds during cross-validation (see the companion article [How to Balance Your Data: SMOTE vs. ROSE](/blog/smote-vs-rose)).
3. **Supervised Classifiers (`SVM` & `MLP`):**
   - Trained radial-basis and linear **Support Vector Machines (SVM)** alongside **Multi-Layer Perceptron (MLP)** neural networks.
   - Optimized decision thresholds for early-warning sensitivity (Recall / F1 / ROC-AUC) to minimize false negatives on distressed municipalities.
