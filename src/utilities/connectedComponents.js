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
    if (v === undefined) return components;
    let edges = [];
    let componentVertices = { [v]: vertices[v] };
    const vertexQueue = [v];
    for (let i = 0; i < vertexQueue.length; i++) {
      const incident = incidentEdges[vertexQueue[i]];
      for (let [vertexKey, edge] of incident) {
        edges.push(edge);
        if (componentVertices[vertexKey] !== undefined) {
          componentVertices[vertexKey] = vertices[vertexKey]
          queue.push(vertexKey);
        }
      }
    }
    components.push({ vertices: componentVertices, edges });
  }
}
