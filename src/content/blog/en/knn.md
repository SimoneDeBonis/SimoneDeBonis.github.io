---
title: "K-Nearest Neighbors (KNN): Probabilistic & Geometric Intuition"
description: "Deriving Voting KNN and Volumetric KNN from non-parametric density estimation and Bayes classification, plus practical efficiency improvements."
date: 2023-01-27
lang: "en"
slugId: "knn"
category: "Data Science"
tags: ["Data Science", "Machine Learning", "Theory", "Classification"]
image: "/assets/img/posts/ducks.jpg"
readingTime: 5
---

> *"If it walks like a duck and quacks like a duck, then it is probably a duck."*

Given a local region of feature space $L(X)$ centered on $X$ with volume $v$, the probability mass inside $L(X)$ is approximately $p(X)v$ and can be estimated non-parametrically from a sample of size $N$ as:

$$
\hat{p}(X)v = \frac{k(X)}{N} \implies \hat{p}(X) = \frac{k(X)}{Nv}
$$

where $k(X)$ is the number of training instances falling inside $L(X)$.

A **K-Nearest Neighbors (KNN)** classifier requires four ingredients:
1. A set of labeled training records;
2. A proximity or distance metric to measure similarity between instances;
3. The hyperparameter $k$, the number of nearest neighbors;
4. A decision rule for aggregating the class labels of the $k$ nearest neighbors (e.g., majority vote or inverse squared-distance weighting).

## Voting KNN

Fixing the local volume $v$ and counting how many points of each class $\omega_i$ fall inside the region, we can plug the density estimate $\hat{p}(X|\omega_i) = \frac{k(X|\omega_i)}{N_i v}$ and the prior $p(\omega_i) = \frac{N_i}{N}$ into Bayes' decision rule:

$$
g(X) = \begin{cases}
\omega_1 & \text{if } \frac{N_1}{N}\frac{k(X|\omega_1)}{N_1 v} > \frac{N_2}{N}\frac{k(X|\omega_2)}{N_2 v} \\
\omega_2 & \text{if } \frac{N_1}{N}\frac{k(X|\omega_1)}{N_1 v} < \frac{N_2}{N}\frac{k(X|\omega_2)}{N_2 v}
\end{cases}
$$

Simplifying $\frac{N_i}{N \cdot N_i v}$ yields the classic majority vote rule:

$$
g(X) = \begin{cases}
\omega_1 & \text{if } k(X|\omega_1) > k(X|\omega_2) \\
\omega_2 & \text{if } k(X|\omega_1) < k(X|\omega_2)
\end{cases}
$$

## Volumetric KNN

Conversely, if we fix the number of neighbors $k$ per class and allow the volume $v_i(X)$ of the sphere enclosing the $k$ nearest neighbors of class $\omega_i$ to vary with $X$, then $\hat{p}(X|\omega_i) = \frac{k}{N_i v_i(X)}$:

$$
g(X) = \begin{cases}
\omega_1 & \text{if } \frac{N_1}{N}\frac{k}{N_1 v_1(X)} > \frac{N_2}{N}\frac{k}{N_2 v_2(X)} \\
\omega_2 & \text{if } \frac{N_1}{N}\frac{k}{N_1 v_1(X)} < \frac{N_2}{N}\frac{k}{N_2 v_2(X)}
\end{cases}
$$

Since the volume $v_i(X)$ of a hypersphere is monotonically proportional to its radius $d(X, \text{KNN}_i)$ (the distance to the $k$-th nearest neighbor of class $i$):

$$
g(X) = \begin{cases}
\omega_1 & \text{if } v_2(X) > v_1(X) \iff d(X, \text{KNN}_2) > d(X, \text{KNN}_1) \\
\omega_2 & \text{if } v_2(X) < v_1(X) \iff d(X, \text{KNN}_2) < d(X, \text{KNN}_1)
\end{cases}
$$

## Practical Considerations

- **Distance Metrics:** For high-dimensional sparse document vectors, **cosine similarity** outperforms Euclidean distance or Pearson correlation.
- **Feature Scaling:** Standardization (zero mean, unit standard deviation) is essential so attributes with large numerical scales do not dominate the distance calculation.
- **Choosing $k$:** If $k$ is too small, the classifier is highly sensitive to local noise points (high variance); if $k$ is too large, the neighborhood spills across class boundaries (high bias).
- **Local Non-Linear Boundaries:** As an instance-based (lazy) learner, KNN incurs zero parametric training cost and can model arbitrary decision boundaries, but naive inference scales as $O(Nd)$ with training set size.

## Improving KNN Efficiency

1. **Spatial Indexing & Approximate Search:** Avoid exhaustive distance calculations using multi-dimensional access trees (**$k$-d trees**, ball trees), **Fast Approximate Nearest Neighbors (ANN)**, or **Locality-Sensitive Hashing (LSH)**.
2. **Condensing:** Select a compact subset of prototype instances that preserves the original decision boundary.
3. **Editing:** Remove noisy or overlapping boundary instances to both speed up inference and smooth the decision boundary.
