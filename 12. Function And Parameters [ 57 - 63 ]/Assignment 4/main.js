function checkStatus(a, b, c) {
	let newA, newB, newC;
	let data = [a,b,c];
	console.log(data);
	data.forEach((element)=> {
		if (typeof element=== 'string'){
			newA= element;
		}
		else if (typeof element === 'number'){
			newB= element;
		}
		else if (typeof element === 'boolean'){
			newC= element;
		}
	});
	if (newC === true) {
		console.log(`Hello ${newA}, Your age Is ${newB},You Are Available For Hire `);
	} else {
		console.log(`Hello ${newA}, Your age Is ${newB}, You Are Not Available For Hire `);
	}
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
