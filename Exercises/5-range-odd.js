'use strict';


const rangeOdd = (start, end) => {
  const arr = [];
  let j = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0)
      arr[j++] = i;
  }
  return arr;
};

module.exports = { rangeOdd };
