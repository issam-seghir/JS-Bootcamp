

function fromTo(value) {
    let valueArray = value.split("-");
    console.log(valueArray);

    for (let i = Math.min(...valueArray); i <= Math.max(...valueArray); i++) {
        console.log(i);
    }
}


fromTo(prompt("Please enter : from-to number", "5-20"));
