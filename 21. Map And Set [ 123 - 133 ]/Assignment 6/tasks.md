## Tasks 🎯

- You have an **array** that contains a combination of **numbers** and **letters**.
- We will **replace** the **numbers** in the **array** with **their first letters**.
- The **letters** **can change**, so do not rely on them.
- No matter where the **numbers** are in the **array**, you must always make them come at the **beginning** of the **array**.
- The number of **numbers** can change, so your solution must work on any **array**.
- See each example and its **output**

> Finally, watch an explanation of the idea so that you fully understand it.

## Code 💻

```js
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// Needed Output
['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
```

```js
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// Needed Output
['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
```

```js
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// Needed Output
["Z", "Y", "Z", "Y", "A", "D", "E"]
```

- You have the following array contains 3 numbers

```js
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
```

- So regardless of the location of the numbers, we make sure that it is at the beginning of the array

```js
let chars = [10, 15, 6, "A", "B", "C", "D", "E"];
```

- Now we will copy the first 3 letters of the numbers to show the following result

```js
let chars = ["A", "B", "C", "A", "B", "C", "D", "E"];
```
