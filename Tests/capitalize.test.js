const capitalize = require("../Functions/capitalize.js");

test("capitalizes the d in dog", () => {
  expect(capitalize("dog")).toBe("Dog");
});

test("capitalizes the o in overload", () => {
  expect(capitalize("overload")).toBe("Overload");
});

test("changes nothing for Awesome", () => {
  expect(capitalize("Awesome")).toBe("Awesome");
});
