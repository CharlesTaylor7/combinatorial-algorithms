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

function* column(i, array) {
  const n = array.length;
  for (let j = 0; j < array.length; j++) {
    const row = array[j];
    if (row.length !== n) throw new Error('array is not square');
    yield row[i];
  }
}

export const isLatinSquare = array => {
  const n = array.length;
  for (let row of array) {
    if ((new Set(row)).size !== n) return false;
  }
  for (let i = 0; i < n; i++) {
    const col = column(i, array);
    if ((new Set(col)).size !== n) return false;
  }
  return true;
}

export const transversalDesignToLatinSquare = td => {

}
