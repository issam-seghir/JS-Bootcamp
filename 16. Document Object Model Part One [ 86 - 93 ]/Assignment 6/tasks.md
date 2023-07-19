## Tasks 🎯

- You have an **input** field that allows you to specify the **number** of elements you want to create.
- You have another **field** where you can **select** the **type** of element, either a `div` or `section`.
- You have an **input** field to enter the word that will appear inside each item.
- You have a **button** to initiate the creation process.
- When you click the **button** to create the elements, ensure that any previously created elements are first removed.
- If you wish, you can format the **CSS** using **JavaScript** to practice coordinating with JavaScript.
- Alternatively, you can naturally **style** the elements using **CSS** without any issues.
- Ensure that the **form** does not **submit** the data, preventing the page from **refreshing**.
- Each **element** should have an `id` and a `class`, with the `id` increasing for each element.
- Refer to the provided example for a better understanding.

![Alt text](https://i.imgur.com/fY6TtfO.gif)

## Code 💻

```html
<form action="">
  <input type="number" name="elements" class="input" placeholder="Number Of Elements" />
  <input type="text" name="texts" class="input" placeholder="Elements Text" />
  <select name="type" class="input">
    <option value="Div">Div</option>
    <option value="Section">Section</option>
  </select>
  <input type="submit" name="create" value="Create" />
  <div class="results"></div>
</form>
```

- The **desired result** within the Results `div` is as follows according to the **number** you chose and according to the **type** of element

```html
<div class="box" title="Element" id="id-1">Hello</div>
<div class="box" title="Element" id="id-2">Hello</div>
<div class="box" title="Element" id="id-3">Hello</div>
```
