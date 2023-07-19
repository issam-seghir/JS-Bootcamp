let start = 0;
let swappedName = "elZerO";
let x = [];

for (let i = start; i < swappedName.length; i++) {
	if (swappedName[i] == swappedName[i].toUpperCase()) {
		x.push(swappedName[i].toLowerCase());
	} else {
		x.push(swappedName[i].toUpperCase());
	}
}
console.log(x.join(""));
