import { cubeGraph, getAdjacencyLists } from './1.1'

test('getAdjacencyLists', () => {
  const lists = getAdjacencyLists(cubeGraph);
  expect(lists).toEqual([
    [1, 2, 4],
    [0, 3, 5],
    [0, 3, 6],
    [0, 5, 6],
    [1, 4, 7],
    [2, 4, 7],
    [3, 6, 5],
  ]);
})
