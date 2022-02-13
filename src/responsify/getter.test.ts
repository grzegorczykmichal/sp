import { getter } from "./getter";

describe("getter", () => {
  it.only.each`
    input                         | index | expectedResult
    ${true}                       | ${0}  | ${true}
    ${true}                       | ${1}  | ${true}
    ${true}                       | ${2}  | ${true}
    ${true}                       | ${3}  | ${true}
    ${true}                       | ${4}  | ${true}
    ${[true, null, null, false]}  | ${0}  | ${true}
    ${[true, null, null, false]}  | ${1}  | ${false}
    ${[true, null, null, false]}  | ${2}  | ${false}
    ${[true, null, null, false]}  | ${3}  | ${false}
    ${[true, null, null, false]}  | ${4}  | ${false}
    ${10}                         | ${0}  | ${10}
    ${10}                         | ${1}  | ${10}
    ${10}                         | ${2}  | ${10}
    ${10}                         | ${3}  | ${10}
    ${10}                         | ${4}  | ${10}
    ${[10, 20, null, null, 40]}   | ${0}  | ${10}
    ${[10, 20, null, null, 40]}   | ${1}  | ${20}
    ${[10, 20, null, null, 40]}   | ${2}  | ${40}
    ${[10, 20, null, null, 40]}   | ${3}  | ${40}
    ${[10, 20, null, null, 40]}   | ${4}  | ${40}
    ${[null, 10, null, 20, null]} | ${0}  | ${10}
    ${[null, 10, null, 20, null]} | ${1}  | ${10}
    ${[null, 10, null, 20, null]} | ${2}  | ${20}
    ${[null, 10, null, 20, null]} | ${3}  | ${20}
    ${[null, 10, null, 20, null]} | ${4}  | ${20}
    ${"right"}                    | ${0}  | ${"right"}
    ${"right"}                    | ${1}  | ${"right"}
    ${"right"}                    | ${2}  | ${"right"}
    ${"right"}                    | ${3}  | ${"right"}
    ${"right"}                    | ${4}  | ${"right"}
    ${["left", null, "center"]}   | ${0}  | ${"left"}
    ${["left", null, "center"]}   | ${1}  | ${"center"}
    ${["left", null, "center"]}   | ${2}  | ${"center"}
    ${["left", null, "center"]}   | ${3}  | ${"center"}
    ${["left", null, "center"]}   | ${4}  | ${"center"}
    ${[{ a: 1 }, null, { b: 2 }]} | ${0}  | ${{ a: 1 }}
    ${[{ a: 1 }, null, { b: 2 }]} | ${1}  | ${{ b: 2 }}
    ${[{ a: 1 }, null, { b: 2 }]} | ${2}  | ${{ b: 2 }}
    ${[{ a: 1 }, null, { b: 2 }]} | ${3}  | ${{ b: 2 }}
    ${[{ a: 1 }, null, { b: 2 }]} | ${4}  | ${{ b: 2 }}
    ${[null, 30, 40]}             | ${0}  | ${30}
    ${[null, 30, 40]}             | ${1}  | ${30}
    ${[null, 30, 40]}             | ${2}  | ${40}
  `(
    "Given $input 'get($index)' should return $expectedResult",
    ({ input, index, expectedResult }) => {
      const get = getter(input);
      const result = get(index);
      expect(result).toEqual(expectedResult);
    }
  );
});
