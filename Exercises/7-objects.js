'use strict';

const fn = () => {
  const obj = { name: 'Alex' };
  let obj1 = { name: 'Alex' };
  obj.name = 'Alexander';
  obj1.name = 'Alexander';

  //obj = { name: 'A' };
  obj1 = { name: 'A' };

};

module.exports = { fn };
