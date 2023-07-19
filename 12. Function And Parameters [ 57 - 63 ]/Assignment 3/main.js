// Get the current date and time
const now = new Date();
// Extract the year, month, day, hour, and second components
const year = now.getFullYear();

function ageInTime(theAge) {
	if (theAge > 10 && theAge < 100) {
		console.log(`year: ${year - theAge}`);
		console.log(`months: ${theAge*12}`);
		console.log(`weeks: ${theAge*12*4}`);
		console.log(`days: ${theAge*365}`);
		console.log(`hours: ${theAge*365*24}h`);
		console.log(`minutes: ${theAge*365*24*60}min`);
		console.log(`seconds: ${theAge*365*24*60*60}s`);
	}
	else{
		console.log("Age out of range");
	}
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
