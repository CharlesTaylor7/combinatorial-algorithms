export const petersenGraph = {
  vertices: Array.from({ length: 10 }, (_, k) => k),
  edges: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [0, 4],
    [0, 5],
    [1, 6],
    [2, 7],
    [3, 8],
    [4, 9],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 9],
    [5, 9],
  ]
}

export const incidenceMatrix = graph => {
  const { vertices, edges } = graph;
  const matrix = Array.from(vertices, () => Array.from(edges, () => 0));

  for (let [index, edge] of Object.entries(edges)) {
    const [i, j] = edge;
    matrix[i][index] = 1;
    matrix[j][index] = 1;
  }
  return matrix;
}

export const adjacencyMatrix = graph => {
  const { vertices, edges } = graph;
  const matrix = Array.from(vertices, () => Array.from(vertices, () => 0));

  for (let edge of edges) {
    const [i, j] = edge;
    matrix[i][j] = 1;
    matrix[j][i] = 1;
  }
  return matrix;
}

const solution = () => {
  console.log(incidenceMatrix(petersenGraph))
  console.log(adjacencyMatrix(petersenGraph))
}
