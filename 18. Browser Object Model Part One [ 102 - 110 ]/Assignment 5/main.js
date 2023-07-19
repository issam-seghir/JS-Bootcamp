


let x = "10";
// create a new element
let newElement = document.createElement("div");
newElement.textContent = x;
//  add the new element to the document
document.body.append(newElement);


function showCounter() {
    x--;
    newElement.textContent = x;
    if (x == 5) {
        const windowFeatures = "left=100,top=100,width=550,height=550";
        window.open("https://elzero.org", "_blank", windowFeatures);
    }
    if (x == 0) {
        clearInterval(timer);
    }
}

const timer = setInterval(showCounter, 1000);
