let zero = "000";
//  use cases
let num = 9;
//  num = 20;
//  num = 110;

if (num < 10) {
	console.log((zero + num).slice(-3));
} else if (num >= 10 && num < 100) {
	console.log((zero + num).slice(-3));
} else {
    console.log(num);

}
