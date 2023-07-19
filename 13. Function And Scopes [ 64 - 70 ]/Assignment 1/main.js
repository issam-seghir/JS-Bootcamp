function getDetails(zName, zAge, zCountry) {
	function namePattern(zName) {
    return `${zName.split(' ')[0]} ${zName.split(' ')[1][0].toUpperCase()}.`;
		// Osama Mohamed => Osama M.
		// Ahmed ali => Ahmed A.
	}
	function ageWithMessage(zAge) {
		return `${parseInt(zAge)}`;
		// 38 Is My Age => Your Age Is 38
		// 32 Is The Age => Your Age Is 32
	}
	function countryTwoLetters(zCountry) {
		return `${zCountry.slice(0,2).toUpperCase()}`;
		// Egypt => You Live In EG
		// Syria => You Live In SY
	}
	function fullDetails() {
    return `Hello ${namePattern(zName)} , Your Age Is ${ageWithMessage(zAge)}, Your Live In ${countryTwoLetters(zCountry)}`;
	}
	return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
