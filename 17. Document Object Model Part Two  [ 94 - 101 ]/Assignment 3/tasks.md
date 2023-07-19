## Tasks 🎯


- You have two elements on the page: a `div` and a **Paragraph**.
  - The **Paragraph** needs to be **removed** entirely from the page.
  - As for the `div`, the requirement is to **place** an element **before** it and an element **after** it, as shown in the example below:


## Code 💻

```html
<div class="our-element">Our Element</div>
<p>Paragraph</p>
```

- required result

```html
<div class="start" title="Start Element" data-value="Start">Start</div>
<div class="our-element">Our Element</div>
<div class="end" title="End Element" data-value="End">End</div>
```
