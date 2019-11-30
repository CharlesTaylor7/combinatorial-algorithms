import { binaryReflectGrayCode, nthGrayCode } from './2.2'

test('binaryReflectGrayCode', () => {
  expect(binaryReflectGrayCode(['0', '1']))
    .toEqual(['00','01', '11', '10'])
})

test('G(0)', () => {
  expect(nthGrayCode(0)).toEqual([''])
})

test('G(1)', () => {
  expect(nthGrayCode(1)).toEqual(['00', '01', '11', '10'])
})

test('G(2)', () => {
  expect(nthGrayCode(2)).toEqual([
    '000', '001', '011', '010',
    '110', '111', '101', '100',
  ])
})
