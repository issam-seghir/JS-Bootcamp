function sayHello(theName, theGender) {
	if (theGender == "Female") {
		console.log(`Miss ${theName}`);
        theGender = "Unknown";
    }
	else if (theGender == "Male") {
		console.log(`Mr ${theName}`);

	}
	else{
		console.log(`${theName}`);
	}
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
