import wu from 'wu';

function swap(A, i, j) {
  return {
    ...A,
    [i]: A[j],
    [j]: A[i],
  }
}

/** yields all permutations of order n */
export function permutations(n) {
  return permute(n, Array.from({ length: n }, (_, i) => i));
}

function* permute(k, A) {
  if (k <= 1) {
    yield A;
  }
  else {
    yield* permute(k - 1, A);
    for (let i = 0; i < k - 1; i++) {
      A = swap(
        A,
        k - 1,
        k % 2 === 0 ? i : 0
      );
      yield* permute(k - 1, A)
    }
  }
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
