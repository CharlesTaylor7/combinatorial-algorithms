import { toBitSet } from "../chapter1/1.12"

export const rank = (subset, n) => {
  const A = toBitSet(subset, { n });
  if (A.length > 1) throw new Error('Rank of the subset is too high (i.e. too close to Number.MAX_SAFE_INTEGER)')

  return A[0];
}

export const unrank = (rank, n) => {
  const set = [];
  for (let x = 0; x < n; x++) {
    if (rank & 1) set.push(x);
    rank = rank >> 1;
  }

  return set;
}

export const rankSubset = (set, subset) => {
  const sorted = Array.from(set).sort((a, b) => a - b);
  const index = {};
  for (let [k, v] of Object.entries(sorted)) {
    index[v] = k;
  }
  const n = sorted.length;
  const indices = subset.map(x => index[x])
  return rank(indices, n);
}

export const unrankSubset = (set, rank) => {
  const sorted = Array.from(set).sort((a, b) => a - b);
  const indices = unrank(rank, sorted.length);
  return indices.map(i => sorted[i]);
}
