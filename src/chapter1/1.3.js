import { transversalDesignToLatinSquare, isLatinSquare } from "./1.2";
import wu from 'wu';

export const makeTraversalDesign = (n) => {
  const elements = Array.from({ length: 3 * n }, (_, i) => i + 1);

  const partition = n !== 0
    ? wu(elements).chunk(n).toArray()
    : [[], [], []];

  const rows = partition[0];
  const cols = partition[1];
  const syms = partition[2];
  const blocks = [];

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      const symbolIndex = (i + j) % n;
      blocks.push([rows[j], cols[i], syms[symbolIndex]]);
    }
  }
  console.log(blocks);

  const td = { elements, blocks, partition };
  if (!isTraversalDesign(td)) throw new Error('Not a traversal design');

  return td;
}

export const isTraversalDesign = obj => {
  return isLatinSquare(transversalDesignToLatinSquare(obj));
}
