let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// Needed Output
// ["A", "B", "C", "A", "B", "C", "D", "E"];

//* case 2:
// chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// Needed Output
// ["A", "B", "C", "D", "A", "B", "C", "D", "E"];

//* case 3:
// chars = ["Z", "Y", "A", "D", "E", 10, 1];
// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"];

const numbers = chars.filter((e) => !isNaN(e));
const letters = chars.filter((e) => isNaN(e));
const sortedArray = numbers.concat(letters);
const numberOfNumbers = numbers.length;
const firstCharIndex = sortedArray.findIndex((e) => isNaN(e));

// console.log("place all numbers in the beginning of tge array :",sortedArray);
// console.log("index of the first char in the array :",firstCharIndex);
// console.log("number of numbers in array :",numberOfNumbers);
console.log(sortedArray.copyWithin(0, firstCharIndex, firstCharIndex + numberOfNumbers));
