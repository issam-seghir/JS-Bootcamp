let specialNames = "Os10O OsO Os100O Osa1000 Os1000 Os100m";

// Output
// ['Os10O', 'OsO', 'Os100O']
const pattern = /\bOs\S*O\b/gi;
console.log(specialNames.match(pattern));
