---
title: "Una Differenza Fondamentale tra Machine Learning e Statistica"
description: "Confronto tra il vincolo di non distorsione (BLUE / MVUE) nell'econometria classica e il trade-off bias-varianza nel machine learning supervisionato."
date: 2023-02-05
lang: "it"
slugId: "one-key-difference-between-machine-learning-and-statistics"
category: "Teoria"
tags: ["Machine Learning", "Statistica", "Econometria", "Teoria"]
image: "/assets/img/posts/MLvsStat.jpg"
readingTime: 4
---

Consiglio vivamente la visione di questi due brevi interventi di **Joshua Angrist**:
- [What's the Difference Between Econometrics and Data Science?](https://www.youtube.com/watch?v=2EhRT2mOXm8&t=3s)
- [What’s the Difference Between Econometrics and Statistics?](https://www.youtube.com/watch?v=uVrr_-UUgWk)

## La Scomposizione dell'Errore di Previsione

L'errore quadratico medio atteso di un algoritmo di apprendimento supervisionato $\hat{f}(x)$ si scompone in tre componenti fondamentali:

$$
\text{MSE} = \mathbb{E}\left[(y - \hat{f}(x))^2\right] = \text{Bias}(\hat{f}(x))^2 + \text{Var}(\hat{f}(x)) + \sigma_\varepsilon^2
$$

- **Bias (Distorsione):** Errore causato da assunzioni strutturali semplificatrici o errate del modello.
- **Varianza:** Errore dovuto all'eccessiva sensibilità alle fluttuazioni del campione di addestramento (*overfitting*).
- **Rumore ($\sigma_\varepsilon^2$):** Errore irriducibile legato alla natura stocastica della variabile target.

## Econometria Classica: Priorità alla Non Distorsione

Un problema centrale nella statistica classica e nell'econometria—soprattutto nella stima di effetti causali—è individuare lo stimatore **MVUE** (*Minimum Variance Unbiased Estimator*): lo stimatore a varianza minima **all'interno della classe ristretta degli stimatori non distorti** ($\text{Bias} = 0$).

Sotto le ipotesi del **teorema di Gauss–Markov**, lo stimatore dei Minimi Quadrati Ordinari (OLS) è **BLUE** (*Best Linear Unbiased Estimator*). Tuttavia, essere BLUE non garantisce il minimo errore quadratico medio (MSE) assoluto:
- Stimatori non lineari distorti (come lo **stimatore di James–Stein**) possono ottenere un rischio complessivo inferiore per dimensione $p \ge 3$.
- Stimatori lineari penalizzati (**Ridge** e **Lasso**) introducono deliberatamente una lieve distorsione in cambio di una drastica riduzione della varianza.

## Machine Learning: Minimizzare l'MSE Out-of-Sample

Nel **Machine Learning (ML)** l'obiettivo primario è la generalizzazione predittiva: minimizzare l'errore complessivo su dati non osservati bilanciando basso bias (catturare le regolarità nei dati) e bassa varianza (generalizzare fuori campione).

- **I modelli econometrici** sono disposti a sacrificare parte della performance predittiva fuori campione in cambio di **zero distorsione** e interpretabilità causale dei parametri.
- **I modelli di Machine Learning** rinunciano alla non distorsione per sfruttare il trade-off bias–varianza e massimizzare l'accuratezza predittiva.

I metodi di ML raggiungono un MSE inferiore attraverso:
- **Cross-Validation** e ottimizzazione empirica degli iperparametri
- **Regolarizzazione** e riduzione della complessità ($L_1$, $L_2$, early stopping)
- **Feature Selection e Riduzione della Dimensionalità**
- **Metodi Ensemble:** Bootstrap Aggregation (*Bagging*), *Boosting* e *Stacking*
