import "babel-polyfill"

export const exampleTD = {
  elements: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  partitions: [
    [1, 8, 9],
    [2, 3, 4],
    [5, 6, 7],
  ],
  blocks: [
    [1, 2, 7],
    [1, 3, 6],
    [1, 4, 5],
    [2, 5, 9],
    [2, 6, 8],
    [3, 5, 8],
    [3, 7, 9],
    [4, 6, 9],
    [4, 7, 8],
  ],
}

export const isLatinSquare = array => {
  const n = array.length;

  // check uniqueness in rows
  for (let row of array) {
    // check squareness
    if (row.length !== n) throw new Error('array is not square');
    if ((new Set(row)).size !== n) return false;
  }
  // check uniqueness in columns
  for (let i = 0; i < n; i++) {
    const col = wu(array).map(row => row[i]);
    if ((new Set(col)).size !== n) return false;
  }

  // check the elements are a fixed set of numbers from 1 to n
  const set = new Set(Array.from({ length: n }, (_, i) => i + 1));
  for (let row of array) {
    for (let cell of row) {
      if (!set.has(cell)) return false;
    }
  }
  return true;
}

export const transversalDesignToLatinSquare = td => {

}
