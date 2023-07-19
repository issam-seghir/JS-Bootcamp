let theName = "Elzero";

// method 1
console.log(theName.split(""));
// method 2
console.log([...theName]);
// method 3
console.log(Array.from(theName));
// method 4
console.log([...new Set(theName)]);

// method 5
let newArray = [];
for (const iterator of theName) {
    newArray.push(iterator);
}
console.log(newArray);

// Needed Output
// ["E", "l", "z", "e", "r", "o"];
