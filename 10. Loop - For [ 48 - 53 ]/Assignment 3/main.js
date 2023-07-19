let start = 1;
let end = 6;
let breaker = 2;
for (; start <= end; start ++) {
    console.log(start);
    for (i = 1; i < end; i++) {
        if (i % breaker  === 0) {
            console.log( `-- ${i}`);
        }
	}
}



// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
