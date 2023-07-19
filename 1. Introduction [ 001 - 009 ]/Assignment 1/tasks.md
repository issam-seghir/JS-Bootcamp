## Tasks 🎯

You have multiple lines of code, all of which do the same job.
Type **multiple lines of comments** in which you explain in English why certain code will not work, along with the reason.

## Code 💻

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Learn JavaScript</title>
    <script>
      // Code One
      document.getElementById("el").style.color = "red";
    </script>
    <script>
      // Code Two
      window.onload = function () {
        document.getElementById("el").style.color = "red";
      };
    </script>
  </head>
  <body>
    <h1 id="el">Page Title</h1>
    <script>
      // Code Three
      document.getElementById("el").style.color = "red";
    </script>
  </body>
</html>

```
