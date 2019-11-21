import { knapsackOptimal, knapsackOptimize } from "./1.15"

const problemInstance = {
  profits: [1, 2, 3, 5, 7, 10],
  weights: [2, 3, 5, 8, 13, 16],
  capacity: 30,
}
// [ 1, 3, 6, 11, 17, 18]

test('knapsackOptimal', () => {
  expect(knapsackOptimal(problemInstance)).toEqual(18)
})

test('knapsackOptimal', () => {
  expect(knapsackOptimize(problemInstance)).toEqual([0, 1, 0, 0, 1, 0])
})
