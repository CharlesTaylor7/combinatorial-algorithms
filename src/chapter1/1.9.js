import "babel-polyfill"
import wu from 'wu'

/** yields all permutations of order n */
export function permutations(n) {
  return permute(n, Array.from({ length: n }, (_, i) => i + 1));
}

function* permute(k, A) {
  if (k <= 1) {
    // copies the array & puts it into a more compact readable representation
    yield A.join('');
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
 * Counts number of swaps in an insertion sort
 * @param {string} A a permutation of [0,1..(n-1)]
 * @param {number} i an integer: 0 <= i < n
 */
export function N(A, i) {
  return wu(A.split(''))
    .map(x => Number(x))
    .take(i)
    .filter(x => x > A[i])
    .reduce(acc => acc + 1, 0)
}

const solution = () => {
  for(let p of permutations(4)) {
    for (let i = 1; i < 4; i++) {
      console.log(
        "p = " + p + "\n" +
        "i = " + i + "\n" +
        "N = " + N(p, i)
      );
    }
  }
}
