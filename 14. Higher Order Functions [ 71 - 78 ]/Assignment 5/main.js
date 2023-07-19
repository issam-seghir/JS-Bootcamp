let nums = [2, 12, 11, 5, 10, 1, 99];

// 500
let newArray = nums.reduce((acc=1 , current )=> current % 2 === 1 ? current + acc : current * acc);
console.log(newArray);
