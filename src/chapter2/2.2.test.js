import { binaryReflect, nthGrayCode, allGrayCodes } from './2.2'

test('binaryReflect', () => {
  expect(binaryReflect(['0', '1']))
    .toEqual(['00','01', '11', '10'])
})

test('G(0)', () => {
  expect(nthGrayCode(0)).toEqual([''])
})

test('G(1)', () => {
  expect(nthGrayCode(1)).toEqual(['00', '01'])
})

test('G(2)', () => {
  expect(nthGrayCode(2)).toEqual(['00', '01', '11', '10'])
})

test('G(3)', () => {
  expect(nthGrayCode(3)).toEqual([
    '000', '001', '011', '010',
    '110', '111', '101', '100',
  ])
})

test('all gray codes of order 4', () => {
  expect(allGrayCodes(4)).toMatchSnapshot();
})
