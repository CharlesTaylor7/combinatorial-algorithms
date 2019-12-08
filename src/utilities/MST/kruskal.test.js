import kruskalMST from "./kruskal"

// ToDo: Property testing
const graphExample = {
  vertices: ['A', 'B', 'C'],
  edges: [
    { i: 0, j: 1, weight: 3},
    { i: 1, j: 2, weight: 7},
    { i: 2, j: 0, weight: 5},
  ],
}

test('kruskal', () => {
  expect(kruskalMST(graphExample))
  .toMatchObject([
    { i: 0, j: 1, weight: 3},
    { i: 2, j: 0, weight: 5},
  ])
})

/**
 * Generate a random graph
 * @param {number} n number of vertices
 * @param {number} r probability of including a given edge between vertices.
 * @param {[number, number]} weightRange range of weights to sample from
 */
function randomGraph({ n, m, weightRange }) {
  const vertices = Array.from({ length: n }, (_, i) => `${i + 1}`);
  const edges = undefined;
}
