## Tasks 🎯

- We have the following **class** named `Phone`.
- We need to create another **class** named `Tablet` that **inherits** properties from the `Phone` **class**.
- The `Tablet` **class** includes an additional property called **"size"** and also a **method** named "`fullDetails`".
- We have used the `Tablet` **class** to create **multiple** **tablets**.
- Then, we have used the `fullDetails` **method**, which prints information about the **tablet**.
- Now, all you have to do is create the `Tablet` **class** to display the information as shown below.
- If the size is not specified, the word **"Unknown"** should be **displayed**.

## Code 💻

```js
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
```
