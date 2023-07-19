## Tasks 🎯

- We have the following **Object**.
  - After that, there is a line that changes the value of **Score**.
  - Then, there is a **Loop** that prints the complete content of the **Object**, including the **Property** **name** and its **value**.
  - After that, the content of the **Object** is printed in the **Console**.
  - Modifying the content of the **Object**, the **Loop**, or the print line in the **Console** is **not allowed**.
  - You must write the Code in the specified place to achieve the required tasks.
  - It is required to prevent changing the **value** of the **score**.
  - The `id` should not be displayed within the Loop but should appear without any issues in the content of the Object in the Console.
  - The **country** should **not appear** in the **Loop** or in the content of the **Object** in the **Console**.

## Code 💻

```js
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

"username => Elzero"
"score => 1000"
{username: 'Elzero', score: 1000, id: 100}
```
