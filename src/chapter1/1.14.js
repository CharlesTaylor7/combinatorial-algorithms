import { petersenGraph } from "./1.13";
import wu from 'wu';

function adjacencyLists(graph) {
  const { vertices, edges } = graph;
  const lists = Array.from(vertices, () => []);

  for (let edge of edges) {
    const [i, j] = edge;
    lists[i].push(j);
    lists[j].push(i);
  }

  return lists;
}

/** Greedy algorithm for vertex coloring
 * The vertex coloring optimization problem
 * is to color a graph with the fewest colors such that no adjacent vertices have the same color
 */
export const vertexColoring = (graph) => {
  const adjList = adjacencyLists(graph);
  const n = adjList.length;
  const coloring = [];

  for (let v = 0; v < n; v++) {
    const colorSet = new Set(adjList[v].map(i => coloring[i]))
    for (let color = 1; color < n + 1; color++) {
      if (!colorSet.has(color)) {
        coloring[v] = color;
        break;
      }
    }
  }
  if (!isVertexColoring(graph, coloring)) {
    throw new Error('Is not a vertex coloring!')
  }

  return coloring;
}

const isVertexColoring = (graph, coloring) =>
  wu(graph.edges)
  .every(edge => coloring[edge[0]] !== coloring[edge[1]]);
