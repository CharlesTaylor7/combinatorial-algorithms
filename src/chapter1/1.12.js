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

export const toBits = (iterable) => {
  let S = 0;
  for (let n of iterable) {
    S = S | (1 << n);
  }
  return S;
}

/**
 * Represent a set of numbers, less than n, as a compact array of unsigned integers.
 * @param {Iterable<number>} iterable
 * @param {number} n an upper bound on the universe that our subset is a part of
 * @param {number} beta the VM word size, 52 becauses that's a safe bound to stay within the SAFE integer range of JS.
 */
export const toBitSet = (iterable, { n = 100, beta = 52 }) => {
  const omega = Math.ceil(n / beta);
  const A = Array.from({ length: omega }, () => 0);
  for (let x of iterable) {
    const i = Math.floor(x / beta);
    const j = x % beta;
    A[i] = A[i] | (1 << j)
  }

  return A;
}

const count = n => {
  let total = 0;
  while (n !== 0) {
    total += n & 1
    n = n >> 1
  }
  return total;
}

export const look = (alpha) => Array.from(
    { length: 1 << alpha },
    (_, k) => count(k)
  );

export const mask = (alpha) => {
  if (alpha < 1) throw new Error("Cannot construct a mask with less than 1 digit")

  let m = 1;
  for (let i = 0; i < alpha - 1; i++) {
    m = (m << 1) | 1
  }
  return m;
}

const defaultAlpha = 4;
const defaultLook = look(defaultAlpha);
const defaultMask = mask(defaultAlpha);

export function setOrder(A) {
  const alpha = defaultAlpha;
  const look = defaultLook;
  const mask = defaultMask;

  let order = 0;
  for (let x of A) {
    while (x !== 0) {
      order += look[x & mask]
      x = x >> alpha
    }
  }

  return order;
}

export function soln() {
  const primesUnder32 = primesUnder(32);
  // omega == n / beta == 8;
  const A = toBitSet(primesUnder32, { n: 40, beta: 5 });
  const order = setOrder(A);
  return order;
}
