let myString = "EElllzzzzzzzeroo".split("");

let newArray = myString.filter((element, index, array) => element !== array[index+1]);
console.log(newArray.join("")); // Elzero
