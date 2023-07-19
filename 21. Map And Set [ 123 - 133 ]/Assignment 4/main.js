let theNumber = 100020003000;
let numberArray = theNumber.toString().split('');
let numberSet = [...new Set(numberArray)].filter((e) => e!== '0').join('');
console.log(numberSet);
// Needed Output
// 123;
