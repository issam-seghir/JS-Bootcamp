let start = 10;
let end = 0;
let stop = 3;

for (; start >= end; start -= 1) {
    console.log(start.toString().padStart(2, '0'));
	if (start === 3) break;
}
