import { responsifiedAdd } from "./add";

describe("responsifiedAdd", () => {
  it.each`
    a                 | b                 | expectedResult
    ${10}             | ${20}             | ${30}
    ${[10, null, 20]} | ${[null, 30, 40]} | ${[40, 50, 60]}
  `("responsifiedAdd", ({ a, b, expectedResult }) => {
    expect(responsifiedAdd(a, b)).toEqual(expectedResult);
  });
});
