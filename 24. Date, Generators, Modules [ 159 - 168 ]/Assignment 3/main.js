//  current date
let date = new Date();
console.log(date);

// last day in previous month
let pastDate = new Date();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
pastDate.setDate(0);
console.log(pastDate);
console.log(`Previous Month Is ${months[pastDate.getMonth()]} And Last Day Is ${pastDate.getDate()} `);
