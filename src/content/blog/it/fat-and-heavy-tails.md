---
title: "Fat e Heavy Tails: Differenze e Implicazioni"
description: "Comprendere la distinzione tra distribuzioni a coda pesante (heavy-tailed), fat-tailed e light-tailed e le implicazioni per il Teorema del Limite Centrale."
date: 2024-07-28
lang: "it"
slugId: "fat-and-heavy-tails"
category: "Statistica"
tags: ["Statistica", "Probabilità", "Finanza Quantitativa", "Teoria"]
image: "/assets/img/posts/swan.jpg"
readingTime: 4
---

Le distribuzioni a coda pesante (**heavy-tailed**) costituiscono un'ampia famiglia di distribuzioni di probabilità in netto contrasto con le distribuzioni **light-tailed**—ovvero la classe di distribuzioni le cui code decadono almeno rapidamente quanto una distribuzione esponenziale o Gaussiana. Nelle distribuzioni a coda pesante la probabilità sugli estremi decade molto più lentamente, rendendo gli eventi estremi tutt'altro che trascurabili.

## Definizione Formale di Heavy Tail

Una variabile aleatoria $X$ con funzione di ripartizione $F(x)$ e funzione di sopravvivenza $\bar{F}(x) = P(X > x) = 1 - F(x)$ ha una **coda destra pesante** se la sua funzione generatrice dei momenti diverge per ogni $t > 0$:

$$
\limsup_{x \to \infty} e^{tx} \bar{F}(x) = \infty \quad \forall t > 0
$$

In altre parole, la coda decade più lentamente di qualsiasi esponenziale $e^{-tx}$.

## Heavy Tails vs. Fat Tails

Sebbene i due termini vengano talvolta usati come sinonimi, nella finanza quantitativa e nella teoria dei valori estremi esiste una distinzione importante:

1. **Distribuzioni Heavy-Tailed (Decadimento sub-esponenziale):** Qualsiasi distribuzione la cui coda non è limitata superiormente da un esponenziale (es. Log-normale, Weibull con parametro di forma $k < 1$, Pareto).
2. **Distribuzioni Fat-Tailed (Decadimento a legge di potenza):** Un sottoinsieme più ristretto la cui funzione di sopravvivenza decade asintoticamente secondo una legge di potenza (*power law*):

$$
\bar{F}(x) \sim L(x) x^{-\alpha} \quad \text{per } x \to \infty, \quad \alpha > 0
$$

dove $L(x)$ è una funzione a variazione lenta e $\alpha$ è il **tail index** (indice di coda). Per una distribuzione fat-tailed, tutti i momenti di ordine $m \ge \alpha$ sono infiniti:

$$
\mathbb{E}[|X|^m] = \infty \quad \text{per } m \ge \alpha
$$

Ad esempio, la distribuzione Log-normale è **heavy-tailed** ma **non fat-tailed**, poiché tutti i suoi momenti sono finiti. Al contrario, la $t$ di Student (con $\nu$ gradi di libertà), la Cauchy ($\alpha = 1$) e la Pareto sono autenticamente **fat-tailed**.

## Implicazioni per il Teorema del Limite Centrale

Quando l'indice di coda soddisfa $\alpha \le 2$, la varianza $\text{Var}(X)$ è infinita ($\alpha < 2$) e il Teorema del Limite Centrale classico cessa di garantire una rapida convergenza della media campionaria verso una Gaussiana:

- **Lenta convergenza dei momenti campionari:** Anche quando $2 < \alpha < 4$ (varianza finita, curtosi infinita), la varianza campionaria e gli stimatori di rischio empirico convergono molto lentamente e restano dominati da singole osservazioni estreme.
- **Teorema del Limite Centrale Generalizzato:** Per $\alpha \in (0, 2)$, le somme normalizzate di variabili i.i.d. convergono verso una **distribuzione $\alpha$-stabile di Lévy**, non verso una Normale.
- **Implicazioni nei modelli di rischio:** Assumere la normalità nei rendimenti finanziari o negli spike dei prezzi dell'energia porta a sottostimare drasticamente la frequenza degli eventi a $> 5\sigma$.
