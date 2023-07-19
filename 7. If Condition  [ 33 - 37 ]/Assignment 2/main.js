let num1 = 9;
let str = "9";
let str2 = "20";

// Output
// ("{num1} Is The Same Value As {str}");
// ("{num1} Is The Same Value As {str} But Not The Same Type");
// ("{num1} Is Not The Same Value Or The Same Type As {str2}");
// ("{str} Is The Same Type As {str2} But Not The Same Value");

if (num1 == str) {
	console.log("{num1} Is The Same Value As {str}");
}
if (num1 == str && num1 !== str) {
	console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (str2 != num1 && str2 !== num1) {
	console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (typeof str == typeof str2 && str2 != str) {
	console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
