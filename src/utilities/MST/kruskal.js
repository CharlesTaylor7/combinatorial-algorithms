import 'babel-polyfill'
import wu from 'wu'

// ToDo: Property testing
export const graphExample = {
  vertices: ['A', 'B', 'C'],
  edges: [
    { i: 0, j: 1, weight: 3},
    { i: 1, j: 2, weight: 7},
    { i: 2, j: 0, weight: 5},
  ],
}

// kruskals algorithm:
// loop through edges in ascending weight order
// take edges which connect disjoint sets

function kruskalMST(graph) {
  const { vertices, edges } = graph;

  // set of edges.
  const mst = [];
  const forest = vertices.map(v => [v]);

  // sort edges in ascending order by weight
  edges.sort((e1, e2) => e1.weight - e2.weight);
  for (let edge of edges) {
    const { i, j } = edge;
    const v1 = vertices[i];
    const v2 = vertices[j];
    // makeshift poor union find.
    const f1 = forest.findIndex(tree => tree.includes(v1));
    const f2 = forest.findIndex(tree => tree.includes(v2));
    if (f1 !== f2) {
      mst.push(edge);
      const first = Math.min(f1, f2);
      const second = Math.max(f1, f2);
      for (let v of forest[second]) {
        forest[first].push(v);
      }
      // delete forest[second];
    }
  }
  return { mst, forest };
}

export default kruskalMST;
