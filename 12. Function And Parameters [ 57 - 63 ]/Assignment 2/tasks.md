## Tasks 🎯

- Create a **function** that performs various **mathematical** **operations**.
- The **function** accepts **three** **parameters**: the **first** **number**, the **second** **number**, and the **type** of mathematical operation.
- The **function** performs the specified **mathematical** **operation** on the **two** **numbers**, and it only supports three operations (**add**, **subtract**, **multiply**).
- If the type of **mathematical** **operation** is not specified, the **function** should perform **addition** on the two numbers.
- If only **one number** is provided within the **function**, display a message on the **console** indicating that **the second number is missing**.

## Code 💻

```js
function calculate(firstNum, secondNum, operation) {
  // Your Code Here
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
```
