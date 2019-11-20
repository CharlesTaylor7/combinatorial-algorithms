import wu from 'wu'
import { isLatinSquare, transversalDesignToLatinSquare, exampleTD } from './1.2'
import { makeTraversalDesign } from './1.3'

describe('makeTraversalDesign', () => {
  test('make a TD of order 1', () => {
    expect(makeTraversalDesign(1))
      .toEqual({
        elements: [1, 2, 3],
        partition: [[1], [2], [3]],
        blocks: [[1, 2, 3]]
      })
  })
  test('make a TD of order 0', () => {
    expect(makeTraversalDesign(0))
      .toEqual({
        elements: [],
        partition: [[], [], []],
        blocks: []
      })
  })
  test('make a TD of order 2', () => {
    expect(makeTraversalDesign(2))
      .toEqual({
        elements: [1, 2, 3, 4, 5, 6],
        partition: [[1, 2], [3, 4], [5, 6]],
        blocks: [
          [1, 3, 5],
          [1, 4, 6],
          [2, 3, 6],
          [2, 4, 5],
        ]
      })
  })
})
