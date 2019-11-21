import "babel-polyfill"

/**
 * Yields the set of primes under n as a bit array
 * @param {number} n
 */
export function* primesUnder(n) {
  const composite = [];
  for (let i = 2; i < n; i++) {
    if (composite[i]) continue;
    yield i;
    for (let j = 1; j < n / i; j++) {
      composite[i * j] = true;
    }
  }
}

export const toBitArray = (iterable) => {
  let S = 0;
  for (let n of iterable) {
    S = S | (1 << n);
  }
  return S;
}

export const toBitSet = (iterable, { n, beta }) => {
  const n = 20;
  const beta = 10;
  const omega = Math.ceil(n / beta);
  const A = Array.from({ length: omega }, () => 0);
  for (let n of iterable) {
    const i = Math.floor(n / beta);
    const j = n % beta;
    A[i] = A[i] | (1 << j)
  }

  return A;
}

export function setOrder(u, A) {

}
