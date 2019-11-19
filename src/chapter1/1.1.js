import "babel-polyfill"

export const cubeGraph = {
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

export const getAdjacencyLists = graph => {
  const { vertices, edges } = graph;
  const lookup = Array.from(vertices, () => []);
  for (let edge of edges) {
    const [v1, v2] = edge;
    lookup[v1].push(v2);
    lookup[v2].push(v1);
  }
  return lookup;
}

// export const diff

function* hamiltonianCircuits(adjLists, path) {
  const n = adjLists.length;
  if (path.length === n && path[0] === path[n]) {
    yield path;
  }
}
