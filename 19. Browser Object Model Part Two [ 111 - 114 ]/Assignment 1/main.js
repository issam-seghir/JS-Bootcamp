

// Get references to the font family, color, and font size select elements
const selectFontFamily = document.querySelector("#font-family");
const selectColor = document.querySelector("#color");
const selectFontSize = document.querySelector("#font-size");

// Get values from local storage
const fontFamily = localStorage.getItem("font-family");
const color = localStorage.getItem("color");
const fontSize = localStorage.getItem("font-size");

// Set initial values for body style and select element
if (fontFamily) {
    document.body.style.fontFamily = fontFamily;
    selectFontFamily.value = fontFamily;
}

if (color) {
    document.body.style.color = color;
    selectColor.value = color;
}

if (fontSize) {
    document.body.style.fontSize = fontSize + "px";
    selectFontSize.value = fontSize;
}

//  short Method

// Event listener for all select elements
selectFontFamily.addEventListener("change", handleSelectChange);
selectColor.addEventListener("change", handleSelectChange);
selectFontSize.addEventListener("change", handleSelectChange);

// Handle select change event
function handleSelectChange(event) {
    const { id, value } = event.target;

    // Store selected value in local storage
    localStorage.setItem(id, value);

    // Update body style based on the select element
    if (id === "font-family") {
        document.body.style.fontFamily = value;
    } else if (id === "color") {
        document.body.style.color = value;
    } else if (id === "font-size") {
        document.body.style.fontSize = value + "px";
    }
}
