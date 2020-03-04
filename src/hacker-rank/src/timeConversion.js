const timeConversion = (str) => {
  if (str.startsWith('12') && str.endsWith('AM')) {
    str = '00' + str.slice(2, str.length - 2);
    return str;
  } else if (str.endsWith('AM')) {
    return str.slice(0, str.length - 2);
  } else if (str.startsWith('12') && str.endsWith('PM')) {
    return str.slice(0, str.length - 2);
  } else if (str.endsWith('PM')) {
    return (parseInt(str.slice(0, 2)) + 12).toString() + str.slice(2, str.length - 2);
  }
};
let str = '12:45:54PM';
console.log(timeConversion(str));