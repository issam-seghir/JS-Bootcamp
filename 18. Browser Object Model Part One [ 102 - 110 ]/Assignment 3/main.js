

let x = "10";
// create a new element
let newElement = document.createElement("div");
newElement.textContent = x;
//  add the new element to the document
document.body.append(newElement);

function showCounter() {
    x--;
    newElement.textContent = x;
    if (x == 0) {
        clearInterval(timer);
    }
}

let timer = setInterval(showCounter, 1000);
