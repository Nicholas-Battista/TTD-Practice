function capitalize(string) {
  if (string.slice(0, 1) === string.slice(0, 1).toUpperCase()) return string;

  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

module.exports = capitalize;
