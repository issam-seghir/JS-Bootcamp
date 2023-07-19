let ip = "2001:dDb8:3333:4444:5555:6666:7777:8888";
const pattern = /([\d\w]{4}:){4,}[\d\w]{4}$/gmi;
console.log(ip.match(pattern));
