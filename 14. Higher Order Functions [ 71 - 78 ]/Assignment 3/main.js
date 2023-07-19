let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero
let newArray = myArray.reduce((acc, current) =>
	Array.isArray(current) ? acc + current.join("") : acc + current
);
console.log(newArray); // Output: Elzero
