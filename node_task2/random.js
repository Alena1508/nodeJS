const generate = (start, end) => {
  let number = start - 0.5 + Math.random() * (end - start + 1)
  number = Math.round(number);
  return number;
};

module.exports = generate;