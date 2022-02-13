import { responsifyMaxValueKey } from "./maxValueKey";

describe("responsifyMaxValueKey", () => {
  it.each`
    input                                                 | expectedResult
    ${[{ a: 1, b: 2, c: -1 }]}                            | ${"b"}
    ${[{ bob: 200, john: -400, alice: 600 }]}             | ${"alice"}
    ${[[{ a: 1, b: 2 }, null, { a: 1, c: 3 }]]}           | ${["b", "c"]}
    ${[[{ a: 1, b: 2 }, { d: 5 }, { a: 1, c: 3, d: 8 }]]} | ${["b", "d"]}
    ${[[{ a: 4, b: 2 }, { c: 3, a: 5 }, { a: 1, b: 0 }]]} | ${"a"}
  `(
    "responsifyMaxValueKey($input) should return $expectedResult",
    ({ input, expectedResult }) => {
      expect(responsifyMaxValueKey(...input)).toEqual(expectedResult);
    }
  );
});
