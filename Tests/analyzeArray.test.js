const analyzeArray = require("../Functions/analyzeArray.js");

test("finds average of [1, 8, 3, 4, 2, 6] to be 4", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("finds min of [1, 8, 3, 4, 2, 6] to be 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("finds max of [1, 8, 3, 4, 2, 6] to be 8", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("finds length of [1, 8, 3, 4, 2, 6] to be 6", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
