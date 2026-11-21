---
title: "Intuition and History of Matrix Multiplication"
description: "From standard cubic complexity O(n³) and Strassen's 1969 breakthrough to AlphaTensor and reinforcement-learning discovered algorithms."
date: 2023-06-09
lang: "en"
slugId: "intuition-and-history-of-matrix-multiplication"
category: "Mathematics"
tags: ["Math", "Linear Algebra", "Algorithms", "Machine Learning"]
image: "/assets/img/posts/matrix.jpg"
readingTime: 4
---

Matrix multiplication sits at the core of scientific computing, econometrics, and modern deep learning. Conceptually, multiplying two matrices $A \in \mathbb{R}^{n \times m}$ and $B \in \mathbb{R}^{m \times p}$ represents the **composition of two linear transformations**.

## From $O(n^3)$ to Strassen's Algorithm

Using the standard row-by-column definition for two $n \times n$ matrices:

$$
C_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj}
$$

computing all $n^2$ entries requires $n^3$ scalar multiplications. For over a century, $O(n^3)$ was widely assumed to be optimal.

In 1969, **Volker Strassen** proved this assumption wrong by showing that two $2 \times 2$ matrices can be multiplied using **7 scalar multiplications** instead of 8, at the cost of extra additions. Applying this block decomposition recursively yields an asymptotic complexity of:

$$
O\left(n^{\log_2 7}\right) \approx O\left(n^{2.807}\right)
$$

## Reinforcement Learning & AlphaTensor

Decades of algebraic research pushed the matrix multiplication exponent $\omega$ lower (Coppersmith–Winograd and subsequent refinements). In 2022, DeepMind introduced **AlphaTensor**, framing the search for low-rank tensor decompositions of the matrix multiplication tensor $\mathcal{T}_n$ as a single-player reinforcement learning game.

AlphaTensor discovered faster practical multiplication algorithms for small matrix sizes—including improving upon Strassen's two-level algorithm for $4 \times 4$ matrices in modular arithmetic—followed shortly by further heuristic improvements in $\mathbb{Z}_2^{5 \times 5}$.

## References

1. **Strassen, V.** *Gaussian elimination is not optimal.* Numer. Math. 13, 354–356 (1969). [https://doi.org/10.1007/BF02165411](https://doi.org/10.1007/BF02165411)
2. **Fawzi, A., Balog, M., Huang, A. et al.** *Discovering faster matrix multiplication algorithms with reinforcement learning.* Nature 610, 47–53 (2022). [https://doi.org/10.1038/s41586-022-05172-4](https://doi.org/10.1038/s41586-022-05172-4)
3. **Manuel Kauers and Jakob Moosbauer.** *The FBHHRBNRSSSHK-algorithm for multiplication in $\mathbb{Z}_2^{5 \times 5}$ is still not the end of the story.* Technical Report 2210.04045, arXiv (2022).
