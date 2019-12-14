/**
 * @param {Graph} Graph
 * @returns {Graph[]} An array of the connected components.
 */
export default function connectedComponents({ vertices, edges }) {
  const vertexKeys = Object.keys(vertices);
  if (vertexKeys.length === 0) {
    return [];
  }

  const incidentEdges = Object.fromEntries(vertexKeys.map(key => [key, []]));

  for (let edge of edges) {
    const { i, j } = edge;
    incidentEdges[i].push([j, edge]);
    incidentEdges[j].push([i, edge]);
  }

  const components = [];

  while(true) {
    const v = vertexKeys.pop();
    let edgeSet = [];
    let vertexSet = {};
    const edgeQueue = 
    while (true) {

    }
  }

  return components;
}
