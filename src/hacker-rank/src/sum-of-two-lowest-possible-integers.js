const sumTwoSmallestNumbers = (numbers) => {
  const [a, b] = numbers.sort((a, b) => a - b);
  return a + b;

  let min = numbers[0];
  let secondMin = numbers[0];
  let indexMin = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
      indexMin = i;
    }
    min = Math.min(min, numbers[i]);
  }
  for (let i = 0; i < numbers.length; i++) {
    if (i !== indexMin) {
      secondMin = Math.min(secondMin, numbers[i]);
    }
  }
  return min + secondMin;
};

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));