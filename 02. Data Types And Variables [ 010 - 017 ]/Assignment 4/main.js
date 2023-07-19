let a = 21;
let b = 20;
let d = a;
let e = b;
let c = `${e}${d}`;
console.log(`_${d}_${(c + "_").repeat(3)}${e}_`);
//  _21_2021_2021_2021_20_
