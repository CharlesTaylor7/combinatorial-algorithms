import { rankSubset, unrankSubset } from "./2.1"

test('rankSubset', () => {
  expect(rankSubset([2, 3, 5, 7, 11, 13], [3, 7, 13]))
    .toBe(42)
})

test('rank-unrank roundtrip', () => {
  const set = [2, 3, 5, 7, 11, 13];
  const subset = [3, 7, 13];
  const rank = rankSubset(set, subset);
  const unranked = unrankSubset(set, rank);

  expect(unranked).toEqual(subset)
})
