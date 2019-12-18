'use strict';

const range = (start, end) => {
  const arr = [];
  let j = 0;
  for (let i = start; i <= end; i++) {
    arr[j++] = i;
  }
  return arr;
};


module.exports = { range };
