import "babel-polyfill"

const successor = (T, n) => {
  const k = T.length;

  let i = 0;
  while (i < k && T[k - 1 - i] === (n - 1 - i)) {
    i++;
  }
  if (i === k) return undefined;
  const U = Array.from(T);
  i = k - 1 - i
  U[i]++;
  for (let j = i + 1; j < k; j++) {
    U[j] = U[j-1] + 1;
  }
  return U;
}

function* enumerateCombinations(n, k) {
  if (n < k || n < 0 || k < 0) return;
  let T = Array.from({ length: k }, (_, i) => i);

  while (T !== undefined) {
    yield T;
    T = successor(T, n);
  }
}

export default enumerateCombinations;
