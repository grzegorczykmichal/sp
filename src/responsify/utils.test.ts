import { takeFirstNotEmpty } from "./utils";

describe("takeFirstNotEmpty", () => {
  it.each`
    input                                        | expectedResult
    ${[]}                                        | ${[]}
    ${[null]}                                    | ${[]}
    ${[undefined]}                               | ${[]}
    ${[null, null, undefined, null]}             | ${[]}
    ${[1]}                                       | ${[1]}
    ${[null, null, 3.14]}                        | ${[null, null, 3.14]}
    ${[null, undefined, null, 1.61, 1, 2, 3, 4]} | ${[null, null, null, 1.61]}
    ${[1337, 1, 2, 3, 4]}                        | ${[1337]}
    ${[null, 30, 40]}                            | ${[null, 30]}
    ${[null, 30, 30]}                            | ${[null, null, 30]}
  `(
    "Given $input takeFirstNotEmpty should return $expectedResult",
    ({ input, expectedResult }) => {
      const result = takeFirstNotEmpty(input);
      expect(result).toEqual(expectedResult);
    }
  );
});
