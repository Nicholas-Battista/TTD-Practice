const calculator = require("../Functions/calculator.js");

test("adds 5 + 5", () => {
  expect(calculator.add(5, 5)).toBe(10);
});

test("subtracts 10 - 5", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("multiplys 5 * 5", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test("divides 25 / 5", () => {
  expect(calculator.divide(25, 5)).toBe(5);
});
