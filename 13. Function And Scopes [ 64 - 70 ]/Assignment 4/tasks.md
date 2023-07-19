## Tasks 🎯

- Create a Function named `specialMix` that accepts an **unknown** **number** of **Parameters**.
- The **Function** can accept **numbers**, **strings**, or **strings** **containing** **numbers** at the **beginning**.
- If all Arguments are **numbers**, add them together.
- If the **strings** **contain** **numbers**, extract the **numbers** from them, add them together, and **exclude** any **strings** that do not contain **numbers**.
- If all Arguments are **strings**, print the message **"All Is Strings."**
- See the example to view the Test Cases.

## Code 💻

```js
function specialMix(...data) {
  // Your Code Here
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
```
