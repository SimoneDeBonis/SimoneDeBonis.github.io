---
title: "Intuizione e Storia del Prodotto Matriciale"
description: "Dalla complessità cubica O(n³) e l'algoritmo di Strassen del 1969 fino ad AlphaTensor e alla scoperta di nuovi algoritmi tramite Reinforcement Learning."
date: 2023-06-09
lang: "it"
slugId: "intuition-and-history-of-matrix-multiplication"
category: "Matematica"
tags: ["Matematica", "Algebra Lineare", "Algoritmi", "Machine Learning"]
image: "/assets/img/posts/matrix.jpg"
readingTime: 4
---

La moltiplicazione tra matrici è alla base del calcolo scientifico, dell'econometria e del deep learning moderno. Dal punto di vista geometrico, moltiplicare due matrici $A \in \mathbb{R}^{n \times m}$ e $B \in \mathbb{R}^{m \times p}$ rappresenta la **composizione di due trasformazioni lineari**.

## Da $O(n^3)$ all'Algoritmo di Strassen

Applicando la definizione standard riga-per-colonna per due matrici quadrate $n \times n$:

$$
C_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj}
$$

il calcolo di tutti gli $n^2$ elementi richiede $n^3$ moltiplicazioni scalari. Per oltre un secolo si è ritenuto che la complessità $O(n^3)$ fosse impossibile da migliorare.

Nel 1969 **Volker Strassen** dimostrò il contrario, scoprendo che due matrici $2 \times 2$ possono essere moltiplicate utilizzando **7 moltiplicazioni scalari** anziché 8, a fronte di alcune somme aggiuntive. Applicando ricorsivamente questa decomposizione a blocchi si ottiene una complessità asintotica pari a:

$$
O\left(n^{\log_2 7}\right) \approx O\left(n^{2.807}\right)
$$

## Reinforcement Learning e AlphaTensor

Decenni di ricerca algebrica hanno progressivamente abbassato l'esponente asintotico $\omega$ (Coppersmith–Winograd e successivi miglioramenti). Nel 2022 DeepMind ha presentato **AlphaTensor**, formulando la ricerca di decomposizioni a basso rango del tensore della moltiplicazione matriciale $\mathcal{T}_n$ come un problema di Reinforcement Learning.

AlphaTensor ha scoperto algoritmi più efficienti per matrici di piccole dimensioni—migliorando anche l'algoritmo di Strassen a due livelli per matrici $4 \times 4$ in aritmetica modulare—seguito poco dopo da ulteriori raffinamenti euristici in $\mathbb{Z}_2^{5 \times 5}$.

## Riferimenti Bibliografici

1. **Strassen, V.** *Gaussian elimination is not optimal.* Numer. Math. 13, 354–356 (1969). [https://doi.org/10.1007/BF02165411](https://doi.org/10.1007/BF02165411)
2. **Fawzi, A., Balog, M., Huang, A. et al.** *Discovering faster matrix multiplication algorithms with reinforcement learning.* Nature 610, 47–53 (2022). [https://doi.org/10.1038/s41586-022-05172-4](https://doi.org/10.1038/s41586-022-05172-4)
3. **Manuel Kauers and Jakob Moosbauer.** *The FBHHRBNRSSSHK-algorithm for multiplication in $\mathbb{Z}_2^{5 \times 5}$ is still not the end of the story.* Technical Report 2210.04045, arXiv (2022).
