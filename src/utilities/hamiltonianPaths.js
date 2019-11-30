import "babel-polyfill"
import wu from 'wu'

const last = array => array[array.length - 1];

const hamiltonianPaths = (graph) => {
  return wu(graph.vertices)
    .concatMap(node => generatePaths(graph, [node]))
};

function* generatePaths(graph, path) {
  const n = graph.vertices.length;
  const current = last(path);
  if (path.length === n) {
    yield path;
    return;
  } else {
    for (let adjacent of graph.adjacencies(current)) {
      if (wu(path).every(node => node !== adjacent)) {
        const newPath = [...path, adjacent];
        yield* generatePaths(graph, newPath);
      }
    }
  }
}

export default hamiltonianPaths;
