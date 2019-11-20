import "babel-polyfill"
import wu from 'wu'

/** yields all permutations of order n */
export function permutations(n) {
  const iterable = permute(n, Array.from({ length: n }, (_, i) => i + 1));
  return wu(iterable).map(array => array.join(''));
}

function* permute(k, A) {
  if (k <= 1) {
    yield Array.from(A);
  }
  else {
    yield* permute(k - 1, A);

    for (let i = 0; i < k-1; i++) {
      const m = k - 1;
      const n = k % 2 === 0 ? i : 0;
      swap(A, m, n);
      yield* permute(k - 1, A);
    }
  }
}

function swap(A, i, j) {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

/**
 * @param {array} A a permutation of [0,1..(n-1)]
 * @param {number} i an integer: 0 <= i < n
 */
function N(A, i) {
  return wu(A)
  .take(i - 1)
  .filter(x => x > A[i])
  .reduce(0, acc => acc + 1)
}
