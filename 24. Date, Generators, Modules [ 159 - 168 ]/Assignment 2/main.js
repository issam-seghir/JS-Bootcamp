let startDate = new Date(0) ;

startDate.setFullYear(startDate.getFullYear() + 10);
startDate.setSeconds(startDate.getSeconds() + 1);

console.log(startDate);
// Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)";
