
export const binaryReflect = code => [
  ...code.map(x => `${0}${x}`),
  ...code.map(x => `${1}${x}`).reverse(),
];

export const nthGrayCode = (() => {
  // memoize old gray codes
  const codes = [['']];
  (n) => {
    if (n > codes.length) {
      for(let i = codes.length; i <= n; i++) {
        codes.push[binaryReflect(codes[i-1])]
      }
    }
    return codes[n];
  }
})()
