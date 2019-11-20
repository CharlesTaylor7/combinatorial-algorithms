import { vertexColoring } from "./1.14"
import { petersenGraph } from "./1.13"

test('vertexColoring', () => {
  expect(vertexColoring(petersenGraph))
    .toEqual([1, 2, 1, 2, 3, 2, 1, 2, 1, 4])
})
