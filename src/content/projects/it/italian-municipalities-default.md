---
title: "Predizione del Default dei Comuni Italiani"
description: "Sistema di early warning basato su Support Vector Machine (SVM), Multi-Layer Perceptron (MLP) e tecniche di bilanciamento sintetico (SMOTE & ROSE) per prevenire il dissesto finanziario dei comuni italiani."
date: 2023-03-13
lang: "it"
slugId: "italian-municipalities-default"
category: "Data Science"
tags: ["SVM", "MLP", "SMOTE & ROSE", "Rischio di Credito", "Data Science", "Machine Learning"]
image: "/assets/img/projects/Qlik/napoli.jpg"
externalUrl: "https://simonedebonis.github.io/Projects/Default/"
featured: true
---

Il dissesto finanziario degli enti locali comporta gravi conseguenze socio-economiche per i cittadini e per la continuità dei servizi pubblici. In questo progetto universitario di ricerca, abbiamo sviluppato un **sistema di early warning** basato su algoritmi di Machine Learning per individuare preventivamente i comuni italiani a rischio di default.

## Metodologia e Pipeline di Modellazione

1. **Feature Engineering e Indicatori di Bilancio:**
   - Estrazione e costruzione di indicatori contabili, demografici, di sostenibilità del debito e capacità di riscossione dei comuni italiani.
   - Standardizzazione delle variabili continue e trattamento dei dati mancanti.
2. **Gestione dello Sbilanciamento tra Classi (`SMOTE` vs. `ROSE`):**
   - Poiché il default comunale è un evento raro, i classificatori addestrati sul dataset sbilanciato soffrono di una *recall* prossima allo zero sulla classe minoritaria.
   - Abbiamo condotto un confronto empirico tra **SMOTE** (*Synthetic Minority Over-sampling Technique*) e **ROSE** (*Random Over-Sampling Examples*) applicati rigorosamente all'interno dei fold di training in cross-validation (vedi l'articolo dedicato [Come Bilanciare i Dati: SMOTE vs. ROSE](/it/blog/smote-vs-rose)).
3. **Modelli Supervisionati (`SVM` & `MLP`):**
   - Addestramento e validazione di **Support Vector Machine (SVM)** con kernel lineare e RBF e reti neurali **Multi-Layer Perceptron (MLP)**.
   - Ottimizzazione delle soglie di classificazione per massimizzare la sensibilità del sistema di allerta precoce (Recall / F1 / ROC-AUC) riducendo i falsi negativi sui comuni in stato di fragilità finanziaria.
