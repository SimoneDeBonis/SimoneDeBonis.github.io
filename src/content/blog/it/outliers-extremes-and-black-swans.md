---
title: "Outliers, Extremes e Black Swans"
description: "Distinguere tra anomalie di misura, realizzazioni estreme genuine ed eventi strutturali di coda nella modellazione quantitativa."
date: 2023-06-12
lang: "it"
slugId: "outliers-extremes-and-black-swans"
category: "Statistica"
tags: ["Statistica", "Risk Modeling", "Teoria", "Data Science"]
image: "/assets/img/posts/swan.jpg"
readingTime: 3
---

Nella data science applicata e nella modellazione quantitativa, le osservazioni molto distanti dal corpo centrale dei dati vengono spesso raggruppate sotto l'etichetta generica di **"outlier"**. Tuttavia, trattare ogni valore estremo come rumore da eliminare può cancellare il segnale più critico del dataset.

## Tre Fenomeni Distinti

### 1. Outlier (Anomalie / Contaminazione)
Un outlier è un'osservazione generata da un **processo generatore diverso** rispetto al fenomeno studiato—ad esempio un malfunzionamento di un sensore telemetrico, un errore di registrazione nei log di un server o un errore di data-entry.

In presenza di vere anomalie di misura, tecniche robuste di preprocessing o anomaly detection sono indispensabili per non distorcere la stima dei parametri.

### 2. Extremes (Realizzazioni di Coda)
Un valore estremo appartiene allo **stesso processo generatore dei dati**, ma si colloca nella coda estrema della distribuzione di probabilità sottostante. Secondo la Teoria dei Valori Estremi (*Extreme Value Theory*, EVT), la distribuzione dei massimi per blocchi $M_n = \max(X_1, \dots, X_n)$ converge alla distribuzione **Generalized Extreme Value (GEV)**:

$$
G(x; \xi) = \exp\left( -\left(1 + \xi x\right)^{-1/\xi} \right)
$$

dove il parametro di forma $\xi$ determina il comportamento della coda:
- $\xi = 0$: dominio di Gumbel (code leggere, es. Gaussiana o Esponenziale)
- $\xi > 0$: dominio di Fréchet (code pesanti / fat-tailed, es. Pareto, $t$ di Student)
- $\xi < 0$: dominio di Weibull (coda superiore limitata)

### 3. Black Swans (Cigni Neri)
Formalizzato da Nassim Nicholas Taleb, un **Black Swan** è un evento di coda raro e ad altissimo impatto nei contesti di *"Extremistan"*, in cui una singola osservazione domina gli aggregati cumulativi e i modelli probabilistici retrospettivi soffrono di forte incertezza epistemica.

## Regola Pratica di Modellazione

Prima di rimuovere un'osservazione estrema durante il preprocessing, occorre sempre chiedersi:
- Il dato è fisicamente impossibile o frutto di rumore strumentale (**Outlier**)?
- Oppure il sistema è governato da una distribuzione a coda pesante in cui gli eventi rari concentrano la maggior parte del rischio (**Extreme / Black Swan**)?
