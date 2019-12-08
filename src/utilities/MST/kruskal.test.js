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
