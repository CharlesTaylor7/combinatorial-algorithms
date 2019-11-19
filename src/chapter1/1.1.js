
const cubeGraph = {
  vertices: Array.from({ length: 8 }, (_, i) => i),
  edges: [
    [0, 1],
    [0, 2],
    [2, 3],
    [1, 3],
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7],
    [4, 5],
    [4, 6],
    [6, 7],
    [5, 7],
  ]
}


