function calculate(firstNum, secondNum, operation) {

	switch (operation) {
		case "add":
			console.log(`${firstNum + secondNum}`);
			break;
		case "subtract":
			console.log(`${firstNum - secondNum}`);
			break;
		case "multiply":
			console.log(`${firstNum * secondNum}`);
			break;
		default:
			if (typeof secondNum=="undefined"){
				console.log("Second Number Not Found");
			}
			else{
				console.log(`${firstNum + secondNum}`);
			}
	}

}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
