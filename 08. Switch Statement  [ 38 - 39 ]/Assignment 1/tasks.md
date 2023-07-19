## Tasks 🎯

- You have a **variable** that contains the **day** for the appointment , by using the `switch` display  a message to the person based on the **selected day** with the following conditions.
  - Ensure that there are **no** **spaces** before or after the day's name, and the **first** **letter** should be **capitalized** even if the name is written in **lowercase**.
  - If the value of the variable is **Friday**, **Saturday**, or **Sunday**,  display a **message** that there are **no available** appointments on these days.
  - If the value of the variable is **Monday** or **Thursday**, the available appointments are from **10 AM** to **5 PM**.
  - If the value of the variable is on **Tuesday**, the available appointments are from **10 AM** to **6 PM**.
  - If the value of the variable is on **Wednesday**, the available appointments are from **10 AM** to **7 PM**.
  - If the value of the variable is a **wrong day**, display a message: **"Its Not A Valid Day"**

## Code 💻

```js
let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

let day = "Friday";
let day = "Saturday";
let day = "Sunday";
// Output => "No Appointments Available"

let day = "Monday";
let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day = "World";
// Output => "Its Not A Valid Day"
```
