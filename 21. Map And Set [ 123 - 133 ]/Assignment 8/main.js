let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// solution one
console.log([n2.indexOf(Math.min(...n1)) , Math.min(...n1)].join(''));

// solution two
console.log([...n1, ...n2].length * Math.max(...n1, ...n2));

// Needed Output
// 210;
