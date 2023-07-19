let images = document.querySelectorAll("img");

for (const img of images) {
    img.setAttribute("alt", img.hasAttribute("alt")  ? "Old": "Elzero New" );
}
