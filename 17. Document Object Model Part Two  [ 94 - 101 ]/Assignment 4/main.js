let childrens =document.querySelector("div").childNodes;
let wordFromArray =  Array.from(childrens).pop();

//  delete spaces from the beginning and end of the words
console.log(wordFromArray.textContent.trim());

// update : the easiest method
let child = document.querySelector("div").lastChild;
console.log(child.textContent.trim());
