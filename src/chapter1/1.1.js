import "babel-polyfill"
import wu from 'wu'

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

const last = array => array[array.length - 1];

export const hamiltonianCircuits = (graph) => {
  const lists = getAdjacencyLists(graph);
  return wu(graph.vertices)
    .concatMap(node => generateCircuits(lists, [node]))
};

function* generateCircuits(adjLists, path) {
  const n = adjLists.length;
  const current = last(path);
  if (
    path.length === n &&
    wu(adjLists[current])
      .some(adjacent => adjacent === current)
  ) {
    yield path.push(adjacent);
  } else {
    for (let adjacent of adjLists[current]) {
      if (wu(path).every(node => node !== adjacent)) {
        const newPath = [...path, adjacent];
        yield* generateCircuits(adjLists, newPath);
      }
    }
  }
}
