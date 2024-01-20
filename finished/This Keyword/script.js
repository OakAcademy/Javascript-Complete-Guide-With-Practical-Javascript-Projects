'use strict';

// console.log(this);

//Regular Function
const calculateAge = function (birthDate) {
  console.log(2023 - birthDate);
  // console.log('calculateAge', this);
};
calculateAge(1996);

//Arrow Function
const calculateAge2 = (birthDate) => {
  console.log(2023 - birthDate);
  // console.log('calculateAge2', this);
};
calculateAge2(2003);

const accountInfo = {
  birthDate: 1996,
  calculateAge: function () {
    console.log('accountInfo', this);
    console.log(2023 - this.birthDate);
  },
};
accountInfo.calculateAge();

const accountInfo2 = {
  birthDate: 2002,
};
accountInfo2.calculateAge = accountInfo.calculateAge;
accountInfo2.calculateAge();

const example = accountInfo.calculateAge;
example();
