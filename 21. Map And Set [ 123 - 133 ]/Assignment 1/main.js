// Needed Output
// Set(3) {10, 20, 2}
// 2

let setOfNumber= new Set().add(10);
setOfNumber.add(20).add(setOfNumber.size);

console.log(setOfNumber);
console.log([...setOfNumber].pop());
