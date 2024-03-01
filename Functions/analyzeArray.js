function analyzeArray(array) {
  let total = 0;
  let min, max;

  array.forEach((item) => {
    total += item;
    if (item === array[0]) {
      if (item > array[0]) {
        max = item;
        min = array[0];
      } else {
        min = item;
        max = array[0];
      }
    } else {
      if (item < min) min = item;
      if (item > max) max = item;
    }
  });

  const average = total / array.length;
  const length = array.length;

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

module.exports = analyzeArray;
