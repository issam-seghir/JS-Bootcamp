// Get a reference to the element with the class "our-element"
let ourDiv = document.querySelector(".our-element");

// Get a reference to the first <p> element in the document and remove it
let ourP = document.querySelector("p");
ourP.remove();

// Create a new <div> element for the "before" position
let beforeDiv = document.createElement("div");
beforeDiv.setAttribute("class", "start");
beforeDiv.setAttribute("title", "Start Element");
beforeDiv.setAttribute("data-value", "Start");
beforeDiv.innerHTML = "Start";

// Insert the "before" <div> element before the ourDiv element
ourDiv.before(beforeDiv);

// Create a new <div> element for the "after" position
let afterDiv = document.createElement("div");
afterDiv.setAttribute("class", "end");
afterDiv.setAttribute("title", "End Element");
afterDiv.setAttribute("data-value", "End");
afterDiv.innerHTML = "End";

// Insert the "after" <div> element after the ourDiv element
ourDiv.after(afterDiv);
