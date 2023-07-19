// Attach a click event listener to the document
document.addEventListener("click", (event) => {
    // Prevent the default behavior of the click event
    event.preventDefault();
    // Log the name of the clicked element's node name
    console.log(`This is ${event.target.nodeName}`);
});
