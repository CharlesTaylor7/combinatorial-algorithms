import enumerateCombinations from '@/utilities/enumerateCombinations'
import wu from 'wu'

const randomWeight = ([ lo, hi ]) =>
  lo + Math.floor((hi - lo + 1) * Math.random());

/**
 * Generate a random graph
 * @param {number} n number of vertices
 * @param {number} p probability of including a given edge between vertices.
 * @param {[number, number]} weightRange range of weights to sample from
 */
function randomGraph({ n, p, weightRange }) {
  const vertices = Array.from({ length: n }, (_, i) => `${i + 1}`);
  const edges = wu(enumerateCombinations(n, 2))
    .filter(_ => p === 1 || p > Math.random())
    .map(([i, j]) => ({ i, j, weight: randomWeight(weightRange) }));

  return { vertices, edges };
}

export default randomGraph;
