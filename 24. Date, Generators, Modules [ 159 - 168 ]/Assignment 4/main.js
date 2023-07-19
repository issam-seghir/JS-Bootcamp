const birthDate = new Date("2001,03,13");

// Method 1: Using the default toString() method
console.log(birthDate.toString());

// Method 2: Using toUTCString() method
console.log(birthDate.toUTCString());

// Method 3: Custom formatting using the Date methods
const formattedDate = `${birthDate.toDateString()} ${birthDate.toLocaleTimeString()}`;
console.log(formattedDate);
