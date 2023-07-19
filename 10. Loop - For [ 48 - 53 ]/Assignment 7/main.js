let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let index = 1; index < mix.length; index++) {
	const element = mix[index];
	if (typeof element === "number") {
		console.log(element);
	}
}

// Output
// 2;
// 3;
// 4;
