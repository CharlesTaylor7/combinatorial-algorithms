import hamiltonianPaths from "../utilities/hamiltonianPaths";

export const binaryReflect = code => [
  ...code.map(x => `${0}${x}`),
  ...code.map(x => `${1}${x}`).reverse(),
];

export const nthGrayCode = (() => {
  // memoize old gray codes
  const codes = [['']];
  return (n => {
    if (n > codes.length) {
      for(let i = codes.length; i <= n; i++) {
        codes.push[binaryReflect(codes[i-1])]
      }
    }
    return codes[n];
  })
})()

const nCubeGraph = (n) => ({
  vertices: Array.from(
    { length: 2 << n },
    (_, i) => i
  ),
  adjacencies: v =>
    Array.from(
      { length: n },
      (_, i) => v ^ (2 << i)
    ),
});

function* bitSequence(number) {
  while (number !== 0) {
    yield number & 1
    number = number >> 1
  }
}

const join = (seq, sep) =>
  seq.reduce((acc, next) => `${acc}${sep}${next}`)

export const allGrayCodes = (n) => hamiltonianPaths(nCubeGraph(n)).map(path => path.map(v => join(bitSequence(v), '')));
