---
title: "Come Bilanciare i Dati: SMOTE vs. ROSE"
description: "Confronto metodologico ed empirico tra tecniche di oversampling sintetico per la classificazione sbilanciata nella predizione del default dei comuni."
date: 2022-03-03
lang: "it"
slugId: "smote-vs-rose"
category: "Data Science"
tags: ["Data Science", "Machine Learning", "Imbalanced Data", "Classificazione"]
image: "/assets/img/posts/balance.jpg"
readingTime: 3
---

Nel nostro [progetto sulla predizione del default dei comuni italiani](/it/projects/italian-municipalities-default), abbiamo addestrato Support Vector Machine (SVM) e Multi-Layer Perceptron (MLP) per individuare segnali precoci di dissesto finanziario negli enti locali. Poiché il default comunale è un evento raro, il dataset originale presentava un forte **sbilanciamento tra classi** (*class imbalance*).

Quando la classe minoritaria rappresenta solo una piccola frazione delle osservazioni, gli algoritmi standard tendono a favorire la classe maggioritaria, producendo un'accuratezza globale apparentemente elevata ma una *recall* (sensibilità) molto bassa proprio sugli eventi di default.

## Come Funzionano le Tecniche di Ricampionamento Sintetico

### 1. Random Under/Over-Sampling
- **Under-sampling:** Elimina casualmente osservazioni della classe maggioritaria, col rischio di perdere informazioni importanti vicino alla frontiera di decisione.
- **Over-sampling naive:** Duplica con reinserimento le osservazioni minoritarie, causando spesso overfitting attorno ai singoli punti.

### 2. SMOTE (Synthetic Minority Over-sampling Technique)
Introdotto da Chawla et al. (2002), **SMOTE** genera nuove istanze sintetiche interpolando nello spazio delle feature lungo i segmenti che congiungono ciascuna osservazione minoritaria $x_i$ ai suoi $k$ vicini minoritari più prossimi $x_{zi}$:

$$
x_{\text{new}} = x_i + \lambda (x_{zi} - x_i), \quad \lambda \sim \mathcal{U}(0, 1)
$$

In questo modo la regione decisionale della classe minoritaria viene estesa anziché concentrarsi su copie identiche.

### 3. ROSE (Random Over-Sampling Examples)
Proposto da Menardi e Torelli (2014), **ROSE** utilizza un approccio di *smoothed bootstrap* basato sulla stima di densità kernel. Anziché vincolare i nuovi punti ai soli segmenti lineari tra vicini, ROSE campiona nuove osservazioni da una densità kernel condizionata centrata sulle osservazioni reali tramite una matrice di ampiezza di banda $H_j$.

## Risultati del Confronto Empirico

- **Applicare il ricampionamento esclusivamente dentro i fold di training** durante la cross-validation: bilanciare l'intero dataset prima dello split introduce data leakage e sovrastima F1 e AUC.
- **SMOTE** ha garantito ottima stabilità in abbinamento a SVM su indicatori di bilancio precedentemente standardizzati.
- **ROSE** ha offerto una calibrazione più regolare delle probabilità in presenza di indicatori continui con forte sovrapposizione tra classi.
