import { denormalize } from "./denormalize";

describe("normalize", () => {
  it.each`
    input                         | expectedResult
    ${1}                          | ${[1]}
    ${"a"}                        | ${["a"]}
    ${true}                       | ${[true]}
    ${{ a: 1 }}                   | ${[{ a: 1 }]}
    ${[true, null, null, false]}  | ${[true, false, false, false]}
    ${[10, 20, null, null, 40]}   | ${[10, 20, 40, 40, 40]}
    ${[null, 10, null, 20, null]} | ${[10, 10, 20, 20]}
    ${["left", null, "center"]}   | ${["left", "center", "center"]}
    ${[{ a: 1 }, null, { b: 2 }]} | ${[{ a: 1 }, { b: 2 }, { b: 2 }]}
    ${[]}                         | ${[]}
    ${[null, null, null]}         | ${[]}
    ${[undefined, null]}          | ${[]}
    ${[1, null, null, null]}      | ${[1]}
    ${[null, 30, 40]}             | ${[30, 30, 40]}
    ${[null, "a", "b"]}           | ${["a", "a", "b"]}
  `(
    "denormalize($input) should return $expectedResult",
    ({ input, expectedResult }) => {
      const result = denormalize(input);
      expect(result).toEqual(expectedResult);
    }
  );
});
