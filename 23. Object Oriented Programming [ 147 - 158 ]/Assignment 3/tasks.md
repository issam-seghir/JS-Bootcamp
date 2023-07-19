## Tasks 🎯

- You have the following **class** named `User`.
-  We need to **modify** it as desired to implement the requirements below.
- First, **prevent** direct **access** to the **Card** **property**.
- When creating **users**, you will notice that each person entered the **card** **number** in a different way.
- We need all **numbers** to be **strings**, and after every `4` **digits**, there should be a dash (`-`) as shown in the output.
- Do **not** **modify** the **user** creation lines or the **console** lines.


> You can search for **Getters** to retrieve the value of the **Method** as a Property.
> You can use **RegExp** to **convert** the **number** to the format of the **Credit Card**.

## Code 💻

```js
// Edit The Class
class User {
  constructor(username, card) {
    this.u = username;
    this.c = card;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
```
