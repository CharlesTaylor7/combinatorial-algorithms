import { permutations, N } from "./1.9"
import wu from 'wu'

const uniqueCount = iterable =>
  wu(iterable)
  .unique()
  .reduce(total => total + 1, 0);

describe('permutations', () => {
  test('permutations 0', () => {
    expect(Array.from(permutations(0)))
      .toEqual([''])
  })

  test('permutations 1', () => {
    expect(Array.from(permutations(1)))
      .toEqual(['1'])
  })

  test('permutations 2', () => {
    expect(Array.from(permutations(2)))
      .toEqual(['12', '21'])
  })

  test('permutations 4', () => {
    expect(uniqueCount(permutations(4)))
      .toBe(24)
  })

  test('permutations 5', () => {
    const count = uniqueCount(permutations(5))
    expect(count)
      .toBe(120)
  })
})

describe('N(A,i)', () => {
  test('N(321, 2)', () => {
    expect(N('321', 2))
      .toBe(2);
  })
})
