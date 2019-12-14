import enumerateCombinations from '@/utilities/enumerateCombinations'
import wu from 'wu'
import R from 'ramda'
import jsc from 'jsverify'

/**
 * A Graph edge.
 * @typedef {Object} Edge
 * @property {number} i index of outbound vertex
 * @property {number} j index of inbound vertex
 * @property {number} weight weight of edge
 */

/**
 * A graph.
 * @typedef {Object} Graph
 * @property {Array} vertices
 * @property {Edge[]} edges
 */

/**
 * Generate a random graph
 * @param {number} n number of vertices
 * @param {number} p probability of including a given edge between vertices.
 * @param {[number, number]} weightRange range of weights to sample from
 * @returns {Graph}
 */
function randomGraph({ vertexCount, edgeProbability, weightRange }) {
  const vertices = Object.fromEntries(
    Array.from(
      { length: vertexCount },
      (_, i) => [i, String.fromCharCode(i + 65)],
    )
  );

  const edgeGenerator = wu(enumerateCombinations(vertexCount, 2));

  const edgeSelector = ([i, j]) => ({ i, j, weight: randomWeight(weightRange) });

  const edgeFilter = () => edgeProbability > Math.random();

  const edges =
    edgeProbability === 0
    ? []
    : edgeProbability === 1
      ? edgeGenerator
        .map(edgeSelector)
        .toArray()
      : edgeGenerator
        .filter(edgeFilter)
        .map(edgeSelector)
        .toArray();

  return { vertices, edges };
}

function randomWeight ([ lo, hi ]) {
  return lo + Math.floor((hi - lo + 1) * Math.random());
}

function arbitraryGraph({ edgeProbability }) {
  const generator = (size) => randomGraph({ vertexCount: size, edgeProbability, weightRange: [1, size]})

  // Shrink by deleting vertices
  const shrink = (graph) =>
    Object.keys(graph.vertices)
      .map(key => ({
        vertices: R.omit([key], graph.vertices),
        edges: graph.edges
          .filter(edge => edge.i !== key && edge.j !== key)
      }))

  const show = JSON.stringify;

  return jsc.bless({ generator, shrink, show });
}

export default arbitraryGraph;
