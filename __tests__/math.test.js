const { sumTwoNums } = require("../math");

describe("testing the sumTwoNums function", () => {
  test("adds two numbers", () => {
    expect(sumTwoNums(1, 2)).toEqual(3);
  });

  test("gets only numbers", () => {
    expect(sumTwoNums("3", 2)).toEqual("please use numbers only");
  });
});
