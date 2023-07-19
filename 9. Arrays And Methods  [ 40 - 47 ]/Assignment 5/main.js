let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// solution 1
if (haystack.includes(needle)) {
  console.log("found");;
}

// solution 2
if (haystack.indexOf(needle) != -1) {
  console.log("found");
}

// solution 3
haystack.forEach((element) => {
	if (element == needle) {
		console.log("found");
	}
});
