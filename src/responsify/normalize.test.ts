import { normalize } from "./normalize";

describe("normalize", () => {
  it.each`
    input                                         | expectedResult
    ${1}                                          | ${1}
    ${"a"}                                        | ${"a"}
    ${true}                                       | ${true}
    ${{ a: 1 }}                                   | ${{ a: 1 }}
    ${[true, null, null, false]}                  | ${[true, false]}
    ${[10, 20, null, null, 40]}                   | ${[10, 20, 40]}
    ${[null, 10, null, 20, null]}                 | ${[null, 10, 20]}
    ${["left", null, "center"]}                   | ${["left", "center"]}
    ${[{ a: 1 }, null, { b: 2 }]}                 | ${[{ a: 1 }, { b: 2 }]}
    ${[]}                                         | ${null}
    ${[null, null, null]}                         | ${null}
    ${[undefined, null]}                          | ${null}
    ${[1, null, null, null]}                      | ${1}
    ${[10, 20, null, null, 40, null, null, null]} | ${[10, 20, 40]}
    ${[null, 30, 40]}                             | ${[null, 30, 40]}
    ${["a", "a", "b", "b"]}                       | ${[null, "a", "b"]}
  `(
    "normalize($input) should return $expectedResult",
    ({ input, expectedResult }) => {
      const result = normalize(input);
      expect(result).toEqual(expectedResult);
    }
  );
});
