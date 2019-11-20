import { incidenceMatrix, adjacencyMatrix } from "./1.13"

test('incidenceMatrix', () => {
  const graph = { vertices: [0, 1, 2], edges: ['01','21']};
  expect(incidenceMatrix(graph))
    .toEqual([
      [1, 0],
      [1, 1],
      [0, 1]
    ])
})

test('adjacencyMatrix', () => {
  const graph = { vertices: [0, 1, 2], edges: ['01','21']};
  expect(adjacencyMatrix(graph))
    .toEqual([
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0]
    ])
})
