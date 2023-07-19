
function specialMix(...data) {
let count = 0;

data.forEach((element) => {
	if (typeof parseInt(element) === "number" && !isNaN(parseInt(element))) {
		count += parseInt(element);
	}
});

return  count === 0 ? "All Is String" : count;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
