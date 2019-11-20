export const petersenGraph = {
  vertices: Array.from({ length: 10 }, (_, k) => k),
  edges: [
    '01',
    '12',
    '23',
    '34',
    '04',
    '05',
    '16',
    '27',
    '38',
    '49',
    '56',
    '67',
    '78',
    '89',
    '59'
  ]
}

export const incidenceMatrix = graph => {
  const { vertices, edges } = graph;
  const matrix = Array.from(vertices, () => Array.from(edges, () => 0));

  for (let [index, edge] of Object.entries(edges)) {
    const i = Number(edge[0]);
    const j = Number(edge[1]);
    matrix[i][index] = 1;
    matrix[j][index] = 1;
  }
  return matrix;
}

export const adjacencyMatrix = graph => {
  const { vertices, edges } = graph;
  const matrix = Array.from(vertices, () => Array.from(vertices, () => 0));

  for (let edge of edges) {
    const i = Number(edge[0]);
    const j = Number(edge[1]);
    matrix[i][j] = 1;
    matrix[j][i] = 1;
  }
  return matrix;
}

const solution = () => {
  console.log(incidenceMatrix(petersenGraph))
  console.log(adjacencyMatrix(petersenGraph))
}

solution();
