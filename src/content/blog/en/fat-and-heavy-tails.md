---
title: "Fat and Heavy Tails: Differences and Implications"
description: "Understanding the distinction between heavy-tailed, fat-tailed, and light-tailed probability distributions and their implications for the Central Limit Theorem."
date: 2024-07-28
lang: "en"
slugId: "fat-and-heavy-tails"
category: "Statistics"
tags: ["Statistics", "Probability", "Quantitative Finance", "Theory"]
image: "/assets/img/posts/swan.jpg"
readingTime: 4
---

Heavy-tailed distributions form a broad class of probability distributions that contrast sharply with **light-tailed** distributions—the family of distributions whose tails decay at least as fast as an exponential or Gaussian distribution. In heavy-tailed distributions, tail probabilities decay much more slowly, giving extreme events a non-negligible probability of occurring.

## Defining Heavy Tails

A random variable $X$ with cumulative distribution function $F(x)$ and survival function $\bar{F}(x) = P(X > x) = 1 - F(x)$ is said to have a **heavy right tail** if its moment generating function is infinite for all $t > 0$:

$$
\limsup_{x \to \infty} e^{tx} \bar{F}(x) = \infty \quad \forall t > 0
$$

Equivalently, the tail decays slower than any exponential distribution $e^{-tx}$.

## Heavy Tails vs. Fat Tails

While the terms are sometimes used interchangeably, in quantitative finance and extreme value theory a useful distinction is made:

1. **Heavy-Tailed Distributions (Sub-exponential decay):** Any distribution whose tail is not exponentially bounded (e.g., Log-normal, Weibull with shape $k < 1$, Pareto).
2. **Fat-Tailed Distributions (Power-law decay):** A stricter subset of heavy-tailed distributions whose survival function decays asymptotically as a power law (regularly varying tail):

$$
\bar{F}(x) \sim L(x) x^{-\alpha} \quad \text{as } x \to \infty, \quad \alpha > 0
$$

where $L(x)$ is a slowly varying function and $\alpha$ is the **tail index**. For a fat-tailed distribution, all moments of order $m \ge \alpha$ are infinite:

$$
\mathbb{E}[|X|^m] = \infty \quad \text{for } m \ge \alpha
$$

For example, the Log-normal distribution is **heavy-tailed** (slower than exponential) but **not fat-tailed** because all of its moments are finite. By contrast, the Student-$t$ (with $\nu$ degrees of freedom), Cauchy ($\alpha = 1$), and Pareto distributions are genuinely **fat-tailed**.

## Central Limit Theorem Implications

When the tail index satisfies $\alpha \le 2$, the variance $\text{Var}(X)$ is infinite ($\alpha < 2$) or borderline, and the classical Central Limit Theorem no longer guarantees rapid convergence of sample means to a Gaussian distribution:

- **Slow Convergence of Sample Moments:** Even when $2 < \alpha < 4$ (finite variance, infinite kurtosis), sample variance and empirical risk metrics converge extremely slowly and remain dominated by single extreme observations.
- **Generalized Central Limit Theorem:** For $\alpha \in (0, 2)$, properly normalized sums of i.i.d. random variables converge not to a Normal distribution, but to an **$\alpha$-stable (Lévy stable) distribution**.
- **Risk Modeling Takeaway:** Assuming Gaussianity in financial returns or energy price spikes leads to severe underestimation of tail events ($> 5\sigma$ moves).
