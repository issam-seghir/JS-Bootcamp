// Create a form element
const form = document.createElement("form");

// Function to create an input element
const createInput = (type) => {
	const input = document.createElement("input");
	input.setAttribute("type", type);
	return input;
};

// Function to create an option element
const createOption = (value, text) => {
	const option = document.createElement("option");
	option.setAttribute("value", value);
	option.textContent = text;
	return option;
};

// Define an array of input types
const types = ["text", "password", "number"];

// Define an array of languages
const languages = ["English", "Arabic", "Spanish", "German", "French"];

// Create input elements for each type and append to the form
types.forEach((type) => {
	const input = createInput(type);
	form.appendChild(input);
});

// Create a select element for languages and append options to it
const select = document.createElement("select");
languages.forEach((language) => {
	const option = createOption(language, language);
	select.appendChild(option);
});

// Append the select element to the form
form.appendChild(select);

// Prepend the form to the body of the document
document.body.prepend(form);

// Select the input and select elements
const inputText = document.querySelector("input[type=text]");
const inputPassword = document.querySelector("input[type=password]");
const inputNumber = document.querySelector("input[type=number]");
const selectLanguage = document.querySelector("select");

// Function to update session storage with form values
const updateSessionStorage = () => {
	window.sessionStorage.setItem("inputText", inputText.value);
	window.sessionStorage.setItem("inputPassword", inputPassword.value);
	window.sessionStorage.setItem("inputNumber", inputNumber.value);
	window.sessionStorage.setItem("selectLanguage", selectLanguage.value);
};

// Function to update form values from session storage
const updateFormValues = () => {
	inputText.value = window.sessionStorage.getItem("inputText");
	inputPassword.value = window.sessionStorage.getItem("inputPassword");
	inputNumber.value = window.sessionStorage.getItem("inputNumber");
	selectLanguage.value = window.sessionStorage.getItem("selectLanguage");
};

// Event listener to update session storage when form values change
window.addEventListener("change", () => {
	updateSessionStorage();
});

// Update form values from session storage
updateFormValues();
