
/*
you can use even "click" for button (input f type submit)
or use event "submit" for form
example:
    const Btn = document.getElementsByName("create").item(0);
    Btn.addEventListener("submit", function (e) { .... }
 */

document.forms[0].addEventListener("submit", function (e) {
    // Prevent form submission
    e.preventDefault();

    // Get form inputs
    const elementsNumber = parseInt(document.getElementsByName("elements").item(0).value);
    const elementsText = document.getElementsByName("texts").item(0).value;
    const elementsType = document.getElementsByName("type").item(0).value;
    // Remove any previously created elements
    const result = document.getElementsByClassName("results").item(0);
    result.innerHTML = "";

    // Create new elements based on the inputs
    for (let i = 1; i <= elementsNumber; i++) {
        const newElement = document.createElement(elementsType);
        newElement.textContent = elementsText;
        newElement.classList.add("box");
        newElement.setAttribute("title", "Element");
        newElement.setAttribute("id", "id-" + i);
        result.appendChild(newElement);
    }
});
