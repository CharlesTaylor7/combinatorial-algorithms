import hamiltonianPaths from './hamiltonianPaths'

const nChain = (n) => ({
  vertices: Array.from({ length: n }, (_, i) => i),
  adjacencies: v => [v + 1, v - 1].filter(v => v >= 0 && v < n),
})

test('paths of 1-chain', () => {
  const paths = Array.from(hamiltonianPaths(nChain(1)));
  expect(paths).toEqual([[0]])
})

test('paths of 2-chain', () => {
  const paths = Array.from(hamiltonianPaths(nChain(2)));
  expect(paths).toEqual([[0, 1], [1, 0]])
})
