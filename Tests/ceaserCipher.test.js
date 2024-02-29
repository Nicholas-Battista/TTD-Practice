const caesarCipher = require("../Functions/ceaserCipher.js");

test("ciphers cat 2 places to ecv", () => {
  expect(caesarCipher("cat", 2)).toBe("ecv");
});

test("ciphers Cat 2 places to Ecv (tests shifting with capitals)", () => {
  expect(caesarCipher("Cat", 2)).toBe("Ecv");
});

test("ciphers Length 5 places to Qjslym", () => {
  expect(caesarCipher("Length", 5)).toBe("Qjslym");
});

test("ciphers zoo 2 places to bqq (tests shifting past Z)", () => {
  expect(caesarCipher("zoo", 2)).toBe("bqq");
});
