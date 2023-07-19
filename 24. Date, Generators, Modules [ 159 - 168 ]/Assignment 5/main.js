const start = performance.now();

for (let i = 1; i < 100000; i++) {
    console.log(i);
}

const end = performance.now();
const duration = end - start;

console.log(`Loop Took ${duration.toFixed(0)} Milliseconds.`);
