const axios = require('axios');

const OpenAndClosePrice = async (dateA, dateB) => {
  const CONSTANT_URL_PATH = 'https://jsonmock.hackerrank.com/api/stocks/?page=';
  let pageNumber = 1;
  let responseOpenClosePrice = [];

  while (pageNumber <= 5) {
    let response = await axios.get(`${CONSTANT_URL_PATH}${pageNumber}`);
    response = response.data;
    pageNumber += 1;
    const responseWithinDateRange = response.data.filter(data => {
      return new Date(data.date) >= new Date(dateA) && new Date(data.date) <= new Date(dateB);
    });
    // responseOpenClosePrice.push(responseWithinDateRange.map(data => {
    //   return `${data.date} ${data.open} ${data.close}`;
    // }));
    responseWithinDateRange.forEach(data => {
      console.log(`${data.date} ${data.open} ${data.close}`);
    });
  }
  // console.log(responseOpenClosePrice.flat());
};

let dateA = '1-January-2000';
let dateB = '11-January-2000';
console.log(OpenAndClosePrice(dateA, dateB));