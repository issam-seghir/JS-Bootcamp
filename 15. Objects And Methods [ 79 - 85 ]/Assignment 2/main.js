// Method One
// Create Your Object Here

let objMethodOne = {
    property: "Method One",
};
console.log(objMethodOne.property);

// Method Two
// Create Your Object Here

let objMethodTwo = new Object({
    property: "Method Two",
});
console.log(objMethodTwo.property);

// Method Three
// Create Your Object Here

let objMethodThree = new Object();
objMethodThree["property"] = "Method Three";

console.log(objMethodThree.property);

// Method Four
// Create Your Object Here
let objMethodFour = Object.create(objMethodOne);
objMethodFour.property = "Method Four";
console.log(objMethodFour.property);
