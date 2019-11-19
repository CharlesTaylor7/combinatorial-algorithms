import wu from 'wu'
import { cubeGraph, getAdjacencyLists, hamiltonianCircuits } from './1.1'

test('getAdjacencyLists', () => {
  const lists = getAdjacencyLists(cubeGraph);
  expect(lists).toEqual([
    [1, 2, 4],
    [0, 3, 5],
    [0, 3, 6],
    [2, 1, 7],
    [0, 5, 6],
    [1, 4, 7],
    [2, 4, 7],
    [3, 6, 5],
  ]);
})

test('o', () => {
  const circuits = wu.toArray(hamiltonianCircuits(cubeGraph));
  console.log(circuits);

  expect(circuits.length)
    .toBe(96);
})
