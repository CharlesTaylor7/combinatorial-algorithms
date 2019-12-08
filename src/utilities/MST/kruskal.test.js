import kruskalMST, { graphExample } from "./kruskal"

test('kruskal', () => {
  expect(kruskalMST(graphExample))
  .toMatchObject({
    mst: [
      { i: 0, j: 1, weight: 3},
      { i: 2, j: 0, weight: 5},
    ],
    forest: {
      0: ['A', 'B', 'C']
    },
  })
})
