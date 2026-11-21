---
title: "K-Nearest Neighbors (KNN): Intuizione Probabilistica e Geometrica"
description: "Derivazione di Voting KNN e Volumetric KNN a partire dalla stima non parametrica di densità e dal classificatore di Bayes, con tecniche di ottimizzazione."
date: 2023-01-27
lang: "it"
slugId: "knn"
category: "Data Science"
tags: ["Data Science", "Machine Learning", "Teoria", "Classificazione"]
image: "/assets/img/posts/ducks.jpg"
readingTime: 5
---

> *"Se cammina come un'anatra e starnazza come un'anatra, allora probabilmente è un'anatra."*

Data una regione locale dello spazio delle feature $L(X)$ centrata in $X$ e di volume $v$, la massa di probabilità contenuta in $L(X)$ è approssimabile come $p(X)v$ e può essere stimata in modo non parametrico da un campione di dimensione $N$ tramite:

$$
\hat{p}(X)v = \frac{k(X)}{N} \implies \hat{p}(X) = \frac{k(X)}{Nv}
$$

dove $k(X)$ indica il numero di osservazioni di training che cadono in $L(X)$.

Un classificatore **K-Nearest Neighbors (KNN)** richiede quattro elementi:
1. Un insieme di osservazioni etichettate;
2. Una metrica di distanza o prossimità per calcolare la similarità tra istanze;
3. L'iperparametro $k$, ovvero il numero di vicini più prossimi;
4. Una regola di decisione per combinare le etichette dei $k$ vicini (es. voto di maggioranza semplice o pesato per l'inverso del quadrato della distanza).

## Voting KNN

Fissando il volume locale $v$ e contando quanti punti di ciascuna classe $\omega_i$ cadono nella regione, possiamo inserire la stima di densità $\hat{p}(X|\omega_i) = \frac{k(X|\omega_i)}{N_i v}$ e la probabilità a priori $p(\omega_i) = \frac{N_i}{N}$ nella regola di decisione di Bayes:

$$
g(X) = \begin{cases}
\omega_1 & \text{se } \frac{N_1}{N}\frac{k(X|\omega_1)}{N_1 v} > \frac{N_2}{N}\frac{k(X|\omega_2)}{N_2 v} \\
\omega_2 & \text{se } \frac{N_1}{N}\frac{k(X|\omega_1)}{N_1 v} < \frac{N_2}{N}\frac{k(X|\omega_2)}{N_2 v}
\end{cases}
$$

Semplificando i termini si ottiene la classica regola di maggioranza:

$$
g(X) = \begin{cases}
\omega_1 & \text{se } k(X|\omega_1) > k(X|\omega_2) \\
\omega_2 & \text{se } k(X|\omega_1) < k(X|\omega_2)
\end{cases}
$$

## Volumetric KNN

Viceversa, fissando il numero di vicini $k$ per ciascuna classe e lasciando variare il volume $v_i(X)$ dell'ipersfera centrata in $X$ che racchiude i $k$ vicini della classe $\omega_i$, si ha $\hat{p}(X|\omega_i) = \frac{k}{N_i v_i(X)}$:

$$
g(X) = \begin{cases}
\omega_1 & \text{se } \frac{N_1}{N}\frac{k}{N_1 v_1(X)} > \frac{N_2}{N}\frac{k}{N_2 v_2(X)} \\
\omega_2 & \text{se } \frac{N_1}{N}\frac{k}{N_1 v_1(X)} < \frac{N_2}{N}\frac{k}{N_2 v_2(X)}
\end{cases}
$$

Poiché il volume $v_i(X)$ di un'ipersfera è monotono crescente rispetto al raggio $d(X, \text{KNN}_i)$ (la distanza dal $k$-esimo vicino della classe $i$):

$$
g(X) = \begin{cases}
\omega_1 & \text{se } v_2(X) > v_1(X) \iff d(X, \text{KNN}_2) > d(X, \text{KNN}_1) \\
\omega_2 & \text{se } v_2(X) < v_1(X) \iff d(X, \text{KNN}_2) < d(X, \text{KNN}_1)
\end{cases}
$$

## Considerazioni Pratiche

- **Scelta della metrica:** Per documenti o vettori sparsi ad alta dimensionalità, la **cosine similarity** è preferibile alla distanza Euclidea.
- **Preprocessing e Scaling:** La standardizzazione (media zero e deviazione standard unitaria) è indispensabile per evitare che le feature con scala numerica maggiore dominino il calcolo delle distanze.
- **Scelta di $k$:** Se $k$ è troppo piccolo il classificatore è molto sensibile al rumore locale (alta varianza); se $k$ è troppo grande l'intorno include osservazioni di altre classi (alto bias).
- **Costo computazionale:** Essendo un algoritmo *lazy* (*memory-based*), KNN non ha costo di training parametrico e genera confini decisionali non lineari arbitrari, ma la predizione naive richiede tempo $O(Nd)$.

## Migliorare l'Efficienza di KNN

1. **Indicizzazione Spaziale e Ricerca Approssimata:** Strutture dati multidimensionali (**$k$-d trees**, ball trees), **Fast Approximate Nearest Neighbors (ANN)** o **Locality-Sensitive Hashing (LSH)**.
2. **Condensing:** Selezionare un sottoinsieme ridotto di prototipi che mantenga invariata la frontiera decisionale.
3. **Editing:** Rimuovere i punti rumorosi o sovrapposti per accelerare l'inferenza e regolarizzare i confini tra classi.
