## Tasks 🎯

- Create a **function** that prints a message to the user with their **name**, **age**, and whether they are **available** for work or not.
- The **function** should accept **three** **parameters**: **name**, **age**, and **status** ,  Their names should be `(a, b, c)`, respectively.
- The data types are **String** for name, **Number** for age, and **Boolean** for status.
- The data will be **randomly** generated inside the function and will not have a specific order.
- Since the **data** is **unstructured** and **not** **labeled**, you should print the message based on the **data** **type** to make it a logical message.
- The work status can be either `true` or `false` , accordingly the message changes

## Code 💻

```js
function checkStatus(a, b, c) {
  // Your Code Here
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
```
