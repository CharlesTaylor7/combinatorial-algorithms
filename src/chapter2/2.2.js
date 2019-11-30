const codes = [''];

export const binaryReflectGrayCode = code => [
  ...code.map(x => `${0}${x}`),
  ...code.map(x => `${1}${x}`).reverse(),
];

export const nthGrayCode = (n) => {
  if (n > codes.length) {
    for(let i = codes.length; i <= n; i++) {
      codes.push[binaryReflectGrayCode(codes[i-1])]
    }
  }
  return codes[n];
}
