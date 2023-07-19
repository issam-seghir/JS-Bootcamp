// 5 methods with getelement
console.log(document.getElementById("elzero").outerHTML);
console.log(document.getElementsByClassName("element").item(0));
console.log(document.getElementsByName("js").item(0));
console.log(document.getElementsByTagName("div")[0]);
console.log(document.getElementsByTagNameNS("*", "div")[0]);

// 4 methods with query selector
console.log(document.querySelector(".element"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector("[name=js]"));
console.log(document.querySelector("div"));

// 4 methods with query selecte all
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll("[name=js]")[0]);
console.log(document.querySelectorAll("div")[0]);

//  2 last methods
console.log(document.body.childNodes[1]);
console.log(document.body.children[0]);
