let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().join('');

console.log(allArrs.slice(allArrs.indexOf("F")).toLowerCase()); // fxy
