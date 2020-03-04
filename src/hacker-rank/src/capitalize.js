const capitalize = (str) => {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};

const capitalize2 = (str) => {
  str = str[0].toUpperCase() + str.slice(1);
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    }
  }
  return str;
};

console.log(capitalize2('How can mirrors be real if our eyes aren\'t real'));