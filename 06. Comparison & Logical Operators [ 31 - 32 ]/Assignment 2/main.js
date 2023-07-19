let num1 = 10;
let num2 = 20;

console.log(! (num1 == num2)); // true
console.log(num1 <= num2); // true
console.log( num2 >= num1); // true
console.log(Boolean(num2 || num1)); // true
console.log(num2 / num1 === +!!num2 + Boolean(num2)); // true
console.log(num1  && num1 !== num2); // true
