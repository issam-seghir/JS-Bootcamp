

window.onload = () => {
    // create a new element
    let newElement = document.createElement("div");

    //  create the heading
    let h1 = document.createElement("h1");
    let headOneText = document.createTextNode("Welcome");
    h1.append(headOneText);
    newElement.appendChild(h1);

    // Create the content
    let content = document.createElement("p");
    content.textContent = "eclome to Elzero web school";
    newElement.appendChild(content);


    // Create the close button
    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.classList.add("btn")
    closeButton.addEventListener("click", () => {
        newElement.classList.remove("show");
    });
    newElement.appendChild(closeButton);


    // add popup class (style)
    newElement.classList.add("popup");

    //  add the new element to the document
    document.body.append(newElement);

    function popUp() {
        let pupUpElement = document.querySelector(".popup");
        pupUpElement.classList.add("show");
    }
    // Waite 5 second before the popu appear in the page
    setTimeout(popUp, 5000);
}
