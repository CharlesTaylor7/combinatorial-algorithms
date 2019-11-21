import { primesUnder, toBitArray, toBitSet } from "./1.12"

test('primesUpTo', () => {
  expect(Array.from(primesUnder(32)))
    .toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31])
})

test('toBitArray', () => {
  expect(toBitArray([1,3]))
    .toBe(10);

  expect(toBitArray([0,4]))
    .toBe(17);
})

test('toBitSet', () => {
  expect(toBitSet([19], { n: 20, beta: 10 }))
    .toEqual([0, 512])

  expect(toBitSet([10], { n: 20, beta: 10}))
    .toEqual([0, 1])
})
