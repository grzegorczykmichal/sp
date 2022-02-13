import { responsifiedGetContainerWidth } from "./getContainerWidth";

describe("responsifiedGetContainerWidth", () => {
  it.each`
    input                                          | expectedResult
    ${[100, true]}                                 | ${"100%"}
    ${[100, false]}                                | ${"calc(100% - 50px)"}
    ${[150, false]}                                | ${"calc(100% - 75px)"}
    ${[[null, 10, null, 20], [true, null, false]]} | ${["100%", "calc(100% - 5px)", "calc(100% - 10px)"]}
    ${[100, [null, true, null, false]]}            | ${[null, "100%", "calc(100% - 50px)"]}
  `(
    "responsifiedGetContainerWidth($input) should return $expectedResult",
    ({ input, expectedResult }) => {
      expect(responsifiedGetContainerWidth(...input)).toEqual(expectedResult);
    }
  );
});
