import wu from 'wu'
import { isLatinSquare, transversalDesignToLatinSquare, exampleTD } from './1.2'

describe('isLatinSquare', () => {
  test('identifies latin squares', () => {
    expect(isLatinSquare([[1, 2], [2, 1]]))
      .toBe(true)
  })
  test('rejects non latin squares', () => {
    expect(isLatinSquare([[1, 2], [1, 2]]))
      .toBe(false)
  })
  test('rejects non square array', () => {
    expect(isLatinSquare([[1, 2, 3], [1, 2]]))
      .toBe(false)
  })
  test('the empty square is a latin square', () => {
    expect(isLatinSquare([]))
      .toBe(true)
  })
  test('a square with 1 element is a latin square', () => {
    expect(isLatinSquare([[1]]))
      .toBe(true)
  })
  test('the element set is restricted', () => {
    expect(isLatinSquare([[3,-1], [2,'a']]))
      .toBe(false)
  })
})

describe('transversalDesignToLatinSquare', () => {
  test('it works for the example', () => {
    expect(transversalDesignToLatinSquare(exampleTD))
      .toEqual([[3, 2, 1], [2, 1, 3], [1, 3, 2]])
  })
})
