// https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/javascript
// given year, find number of Friday 13th s in that year

const unluckyDays = (year) => {
  const dateA = new Date(year.toString());
  const dateB = new Date((year + 1).toString());
  let d = dateA;
  let counter = 0;
  while (d >= dateA && d < dateB) {
    if (d.getDate() === 13 && d.getDay() === 5) counter++;
    d = new Date( d.setDate(d.getDate() + 1) );
  }
  return counter;
};

// ==== Better Solution =====
const unluckyDaye2 = (year) => {
  let counter = 0;
  for (let i = 0; i < 12; i++) {
    if (new Date(year, i, 13).getDay() === 5) counter ++;
  }
  return counter;
};


console.log(unluckyDays(1986));