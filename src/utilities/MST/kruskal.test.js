import kruskalMST from "./kruskal"
import jsc from 'jsverify'
import arbitraryGraph from "../arbitraryGraph"

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

function edgeCount_prop(graph) {

  const mst = kruskalMST(graph);

  const vertices = Object.values(graph.vertices);
  if (vertices.length === 0) {
    return mst.length === 0;
  }
  return mst.length === vertices.length - 1;
}

jsc.property(
  "MST edge count is one less than the vertex count",
  arbitraryGraph({ edgeProbability: 0 }),
  edgeCount_prop,
)
