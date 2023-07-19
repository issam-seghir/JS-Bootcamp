
let x = "10";
// create a new element
let newElement = document.createElement("div");
newElement.textContent = x;
//  add the new element to the document
document.body.append(newElement);

// function to open the link when the counter reaches zero
function counter() {
    x--;
    newElement.textContent = x;
    if (x == 0) {
        window.open("https://elzero.org", "_blank");
    }
}

setInterval(counter, 1000);
