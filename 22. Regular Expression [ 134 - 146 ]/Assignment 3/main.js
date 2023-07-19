let phone = "+(995)-123 (4567)";
const pattern = /\+\(\d{3}\)-\d{3} \(\d{4}\)/gi;
console.log(phone.match(pattern));
