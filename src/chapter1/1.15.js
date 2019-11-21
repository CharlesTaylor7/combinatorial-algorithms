import wu from 'wu'

/**
 * Solves all knapsack sub problems with dynamic programming
 * @param {number[]} weights
 * @param {number[]} profits
 * @param {number} capacity
 */
const knapsack = ({profits, weights, capacity}) => {
  const n = weights.length;
  if (profits.length !== n) throw new Error('Profit & weight array should have the same length')
  const P = Array.from({ length: n }, () => []);

  for (let m = 0; m <= capacity; m++) {
    P[0][m] = weights[0] <= m ? profits[0] : 0;
    for (let j = 1; j < n; j++) {
      const w = weights[j];
      const p = profits[j];
      if (w <= m) {
        P[j][m] = Math.max(P[j-1][m], P[j-1][m-w] + p);
      } else {
        P[j][m] = P[j-1][m];
      }
    }
  }

  return P;
}

/**
 * Solves all knapsack sub problems with dynamic programming
 * @param {number[]} weights
 * @param {number[]} profits
 * @param {number} capacity
 */
export const knapsackOptimal = ({profits, weights, capacity}) => knapsack({profits, weights, capacity})[profits.length-1][capacity];

/**
 * Solves all knapsack sub problems with dynamic programming
 * @param {number[]} weights
 * @param {number[]} profits
 * @param {number} capacity
 */
export const knapsackOptimize = ({profits, weights, capacity}) => {
  const P = knapsack({profits, weights, capacity});
  const n = weights.length;

  let m = capacity;
  const answer = Array.from(weights, () => 0);

  for (let j = n - 1; j >= 1; j--) {
    const w = weights[j];
    const p = profits[j];

    // if weight j is used
    if (m > w && P[j-1][m-w] + p > P[j-1][m]) {
      answer[j] = 1;
      m -= w;
    }
  }

  if (weights[0] <= m)  {
    answer[0] = 1;
  }

  // sanity check
  const totalProfit = profits.map((p, i) => answer[i] * p).reduce((a, b) => a + b);
  if (totalProfit !== P[n-1][capacity]) {
    console.log(totalProfit)
    throw new Error('Profit is wrong!')
  }
  const totalWeight = weights.map((w, i) => answer[i] * w).reduce((a, b) => a + b);
  if (totalWeight > capacity) throw new Error('Weight is too high!')

  return answer;
}
