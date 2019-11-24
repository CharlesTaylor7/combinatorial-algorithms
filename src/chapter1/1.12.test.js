import { primesUnder, toBitArray, toBitSet, look, mask, setOrder } from "./1.12"

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

test('look', () => {
  expect(look(3))
    .toEqual([0, 1, 1, 2, 1, 2, 2, 3])
})

test('mask', () => {
  expect(mask(3)).toBe(7)
})

test('setOrder', () => {
  expect(setOrder([7])).toBe(3);
})

test('setOrder', () => {
  expect(setOrder([127, 33])).toBe(9);
})
