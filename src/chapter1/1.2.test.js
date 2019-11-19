import wu from 'wu'
import { isLatinSquare } from './1.2'

describe('isLatinSquare', () => {
  it('identifies latin squares', () => {
    expect(isLatinSquare([[1, 2], [2, 1]]))
      .toBe(true)
  })
  it('rejects non latin squares', () => {
    expect(isLatinSquare([1, 2], [1, 2]))
      .toBe(false)
  })
  it('throws if the is array is not square', () => {
    expect(() => isLatinSquare([1, 2, 3], [1, 2]))
      .toThrow()
  })
})
