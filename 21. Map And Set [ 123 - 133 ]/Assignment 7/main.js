
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// method 1
console.log(numsOne.concat(numsTwo));
// method 2
console.log([...numsOne,...numsTwo]);

// method 3
const newArray = []
newArray.push(...numsOne,...numsTwo);
console.log(newArray);

// Needed Output
// [1, 2, 3, 4, 5, 6];
