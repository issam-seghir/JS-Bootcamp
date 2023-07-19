let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let newMix = mix.map( a => typeof a === "number" ? '' : a).reduce(( acc, b ) => acc+b)
console.log(newMix);
