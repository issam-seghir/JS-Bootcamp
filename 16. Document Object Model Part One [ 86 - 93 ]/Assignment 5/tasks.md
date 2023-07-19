## Tasks 🎯

- You have `5` **pictures** on the page, some of them contain the `alt` **attribute**, and the rest don't.
- Loop through all the **pictures** and **check** if the `alt` **attribute** exists or not.
- If the `alt` **attribute** is present, change its **value** to the word `old`.
- If the `alt` **attribute** is not present, change its **value** to `Elzero new`.
- Observe the result to see the desired outcome.

## Code 💻

```html
<img decoding="async" src="#" alt="One" />
<img decoding="async" src="#" />
<img decoding="async" src="#" alt="Three" />
<img decoding="async" src="#" />
<img decoding="async" src="#" />
```

- the required result

```html
<img decoding="async" src="#" alt="Old" />
<img decoding="async" src="#" alt="Elzero New" />
<img decoding="async" src="#" alt="Old" />
<img decoding="async" src="#" alt="Elzero New" />
<img decoding="async" src="#" alt="Elzero New" />
```
