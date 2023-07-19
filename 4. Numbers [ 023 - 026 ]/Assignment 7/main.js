// Simple solution

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4


// Advanced solution
//* This is an advanced extra code that I generated after completing all JavaScript lessons to learn new things.
//* Please don't feel sad if you cannot understand it , you can skip it for now.


/**
 * Generates a random integer between the specified start and end values (inclusive).
 * @param {number} start - The start value of the range.
 * @param {number} end - The end value of the range.
 * @returns {number} - The random integer generated.
 */
function randomNumber(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

/**
 * Checks the random number generation function by generating and printing a random number,
 * and then checking if the function generates all unique numbers between the specified range.
 * @param {number} start - The start value of the range.
 * @param {number} end - The end value of the range.
 */
function randomC(start, end) {
  let randomNumberSet = new Set();

  while (randomNumberSet.size !== end - start + 1) {
    let currentNumber = randomNumber(start, end);
    randomNumberSet.add(currentNumber);
  }

  console.log("Check state:", randomNumberSet.size === end - start + 1 ? "All numbers generated" : "Missing numbers");
  console.log("Random number:", randomNumber(start, end));
}


// print a random number between 0 and 4
randomC(0, 4);
