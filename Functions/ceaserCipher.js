function caesarCipher(string, shiftFactor) {
  let cipherArry = [];
  string.split("").forEach((element) => {
    cipherArry.push(shiftElements(element, shiftFactor));
  });
  return cipherArry.join("");
}

const shiftElements = (element, shiftFactor) => {
  let shiftedItem;

  upperCaseMap.forEach((item) => {
    if (item === element)
      shiftedItem =
        upperCaseMap[handleOverflow(upperCaseMap.indexOf(item), shiftFactor)];
  });

  lowerCaseMap.forEach((item) => {
    if (item === element)
      shiftedItem =
        lowerCaseMap[handleOverflow(lowerCaseMap.indexOf(item), shiftFactor)];
  });

  return shiftedItem;
};

const handleOverflow = (num1, num2) => {
  if (num1 + num2 > 25) {
    return num1 + num2 - 26;
  } else {
    return num1 + num2;
  }
};

/* prettier-ignore */
const upperCaseMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
/* prettier-ignore */
const lowerCaseMap = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
/* prettier-ignore */

module.exports = caesarCipher;
