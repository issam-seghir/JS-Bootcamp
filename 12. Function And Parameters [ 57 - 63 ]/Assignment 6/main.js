multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

function multiply (...num ) {
  let count = 1;
num.forEach(element => {
  if (typeof element === "number") {
    count*=Math.trunc(element);
  }
});
return console.log(count);
}
