import Stack from './stack'

describe('Stack', () => {
  describe('#empty', () => {
    test('is self identical', () => {
      expect(Stack.empty)
        .toBe(Stack.empty)
    })
  })
  describe('#isEmpty', () => {
    test('the empty stack is empty', () => {
      expect(Stack.isEmpty(Stack.empty))
        .toBe(true)
    })
    test('a non empty stack is not empty', () => {
      expect(Stack.isEmpty(Stack.push('a', Stack.empty)))
        .toBe(false)
    })
  })
  describe('#from', () => {
    test('from empty array is empty stack', () => {
      expect(Stack.from([]))
        .toBe(Stack.empty)
    })
    test('can build from an array', () => {
      expect(Stack.from([1, 2]))
        .toEqual(Stack.push(1, Stack.push(2, Stack.empty)))
    })
  })
  describe('#push', () => {
    test('2nd argument must be a stack', () => {
      expect(() => Stack.push(1, 1))
        .toThrow()
    })
  })
  describe('#pop', () => {
    test('can get top of stack', () => {
      expect(Stack.pop(1, Stack.from(['a', 'b', 'c'])))
        .toEqual(['a', Stack.from(['b', 'c'])])
    })
    test('can get many from top of stack', () => {
      const stack = Stack.from(['a', 'b', 'c', 'd'])
      expect(Stack.pop(2, stack))
        .toEqual(['a', 'b', Stack.from(['c', 'd'])])
    })
    test('popping zero returns singleton array', () => {
      const stack = Stack.from(['a', 'b'])
      expect(Stack.pop(0, stack))
        .toEqual([stack])
    })
    test('popping more than stack depth throws', () => {
      expect(() => Stack.pop(2, Stack.from('a')))
        .toThrowError()
    })
  })
  describe('is iterable', () => {
    test('iterate empty stack yields nothing', () => {
      expect(Array.from(Stack.empty))
        .toEqual([])
    })
    test('iterate non empty stack', () => {
      expect(Array.from(Stack.from('ab')))
        .toEqual(['a', 'b'])
    })
  })
  describe('is immutable', () => {
    test('empty stack is immutable', () => {
      expect(() => Stack.empty.foo = "Foo")
        .toThrow()
    })
    test('non empty stack is immutable', () => {
      expect(() => Stack.from('ab').bar = "Bar")
        .toThrow()
    })
  })
  describe('can be destructured', () => {
    test('non empty stack yields head & tail', () => {
      const { head, tail } = Stack.from('ab')
      expect(head).toBe('a')
      expect(tail).toEqual(Stack.from('b'))
    })
  })
})
