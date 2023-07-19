## Tasks 🎯

- You have an **array** that contains a **collection** of objec**t**s that contain the data of people.
- Use **destructuring** assignment to get the desired result in the console in the end.
- If the value of the chosen variable is `1`, you will get the data of the **first person**. If the value is `2`, you will get the data of the `second person`, and so on.
- Note that the output changes depending on the available **variable**.
-  Watch the example to understand what is required.

## Code 💻

```js
let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"
```
