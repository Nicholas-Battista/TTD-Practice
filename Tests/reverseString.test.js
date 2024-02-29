const reverseString = require("../Functions/reverseString.js");

test("turns dog into god", () => {
  expect(reverseString("dog")).toBe("god");
});

test("turns aVeryLongWord into droWgnoLyreVa", () => {
  expect(reverseString("aVeryLongWord")).toBe("droWgnoLyreVa");
});
