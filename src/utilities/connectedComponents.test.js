import connectedComponents from './connectedComponents'

expect.extend({
  toHaveEqualContents(received, expected) {
    try {
      expect(new Set(received)).toEqual(new Set(expected));
      return { pass: true };
    } catch (e) {
      return e.matcherResult;
    }
  },
});

test('connected components of 2 disconnected vertices', () => {
  const vertices = { 0: 'A', 1: 'B' };
  const edges = [];
  const graph = { vertices, edges };
  expect(connectedComponents(graph))
    .toHaveEqualContents([
      {vertices: { 0: 'A'}, edges: []},
      {vertices: { 1: 'B'}, edges: []},
    ])
})

test('connected components of connected graph', () => {
  const vertices = { 0: 'A', 1: 'B' };
  const edges = [{ i: 0, j: 1, weight: 10 }];
  const graph = { vertices, edges };
  expect(connectedComponents(graph))
    .toHaveEqualContents([graph])
})
