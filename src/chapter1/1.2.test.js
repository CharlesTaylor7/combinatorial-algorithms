import wu from 'wu'
import { isLatinSquare } from './1.2'

describe('isLatinSquare', () => {
  test('identifies latin squares', () => {
    expect(isLatinSquare([[1, 2], [2, 1]]))
      .toBe(true)
  })
  test('rejects non latin squares', () => {
    expect(isLatinSquare([[1, 2], [1, 2]]))
      .toBe(false)
  })
  test('throws if the is array is not square', () => {
    expect(() => isLatinSquare([[1, 2, 3], [1, 2]]))
      .toThrow()
  })
  test('the empty square is a latin square', () => {
    expect(isLatinSquare([]))
      .toBe(true)
  })
  test('a square with 1 element is a latin square', () => {
    expect(isLatinSquare([[1]]))
      .toBe(true)
  })
  test('ensures the element set is restricted', () => {
    expect(isLatinSquare([[3,-1], [2,'a']]))
      .toThrow()
  })
})
