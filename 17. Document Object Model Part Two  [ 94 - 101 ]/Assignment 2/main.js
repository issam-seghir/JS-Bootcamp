
// Get the input elements and the result element from the DOM
const inputAdd = document.querySelector(".classes-to-add");
const inputRemove = document.querySelector(".classes-to-remove");
const result = document.querySelector(".classes-list").lastElementChild;


// Function to update the result text based on the content
const updateResultText = () => {
    if (result.innerHTML.trim() === "") {
        result.textContent = "No Classes To Show";
    } else {
        result.textContent = "";
    }
};

// Function to update the classes list when adding new classes
const updateClassesList = () => {
    const inputValue = event.target.value.trim();
    console.log(inputValue);
    event.target.value = "";

    if (inputValue !== "") {
		// Split the input value into an array of classes
		const inputArray = inputValue.toLowerCase().split(" ").sort();

		// Clear the "No Classes To Show" message if present
		if (result.textContent === "No Classes To Show") {
			result.innerHTML = "";
		}

		// Iterate over the input array and create elements for each class
		for (const className of inputArray) {
			if (className === "") {
				continue;
			}
			const newElement = document.createElement("span");
			const textElement = document.createTextNode(className);
			newElement.classList.add(className);
			newElement.appendChild(textElement);
			result.appendChild(newElement);
		}
	}

};

// Function to remove classes from the list
const removeClassesFromList = () => {
	const inputValue = event.target.value.trim();
	event.target.value = "";

	if (inputValue !== "") {
		// Split the input value into an array of classes
		const inputArray = inputValue.toLowerCase().split(" ").sort();

		// Iterate over the input array and remove matching elements from the list
		for (const className of inputArray) {
			if (className === "") {
				continue;
			}

            // Get all elements with the class name and remove them
			const elementsToRemove = result.getElementsByClassName(className);

			while (elementsToRemove.length > 0) {
				elementsToRemove[0].remove();
			}
		}
	}
};


// Add event listeners to the input elements
inputAdd.addEventListener("blur", updateClassesList);
inputRemove.addEventListener("blur", removeClassesFromList);
// Call the function initially to set the initial result text
updateResultText();
