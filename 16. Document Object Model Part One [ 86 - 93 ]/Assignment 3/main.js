
let input = document.getElementsByName("dollar")[0];
let result = document.querySelector(".result");

input.addEventListener("input",function() {

    if (input.value !== "") {

        result.textContent = "";
        let dollars = parseFloat(input.value);
        let pounds = (dollars * 15.6).toFixed(2);
        result.textContent += `{${dollars}} USD Dollar = {${pounds}} Egyptian Pound\n`;
    }


});
// when the input is empty and unfocussed , show the default text
input.addEventListener("blur",function() {
    if (input.value === "") {
        result.textContent = "{0} USD Dollar = {0} Egyptian Pound";
    }
});
