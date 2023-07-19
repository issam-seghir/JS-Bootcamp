## Tasks 🎯


- Create a **function** named `getDetails` that takes three parameters: `zName`, `zAge`, and `zCountry`.
- The **function** should contain **four nested-functions** with the following names: `namePattern`, `ageWithMessage`, `countryTwoLetters`, and `fullDetails`.
- `namePattern` should take a name composed of **two parts**, for example, **"Osama Mohamed"** and return the name in the **format** **"Osama M."** , See the example for more understanding.
- `ageWithMessage` should take a message containing the **age** and extract only the **age** from it .
- `countryTwoLetters` should take the name of a **country** and return a message with the **first two letters** of the **country** name in **capital** **letters**.
- `fullDetails` should combine all the previous **functions** to give you the **complete** **message** as shown in the example.
- The **first letter** of the second person's name can be either **capital** or **small**.
- The message about **age** can change, but the **number** will always be at the **beginning** and will not change its position.
- Comments will provide detailed explanations of what is required.

## Code 💻

```js
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    // Write Your Code Here
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
```
