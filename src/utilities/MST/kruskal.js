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

function find(node) {
  while (node.parent !== undefined) {
    node = node.parent;
  }
  return node;
}

function union(node1, node2) {
  node2.parent = node1;
}

function kruskalMST(graph) {
  const { vertices, edges } = graph;

  // set of edges.
  const mst = [];
  const forest = vertices
    .map(vertex => ({
      vertex,
      rank: 0,
    }));

  // sort edges in ascending order by weight
  edges.sort((e1, e2) => e1.weight - e2.weight);
  for (let edge of edges) {
    const { i, j } = edge;

    // makeshift poor union find.
    const f1 = find(forest[i]);
    const f2 = find(forest[j]);
    if (f1 !== f2) {
      mst.push(edge);
      union(f1, f2);
    }
  }
  return { mst, forest };
}

export default kruskalMST;
