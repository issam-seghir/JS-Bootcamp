## Tasks 🎯

- You have **3 variables** with different numbers and are required to use the **Operators** that you learned instead of the question mark to get the result : ``True``
- It is **forbidden** to use any **numbers** permanently

## Code 💻

```js
let a = 20;
let b = 30;
let c = 10;

console.log(a ? b && a ? c || a ? b); // true
console.log(a ? b ? a ? c); // true
console.log(?(a ? b) && !(a ? b) && ?(a ? c) && ?(a ? c)); // true
```
