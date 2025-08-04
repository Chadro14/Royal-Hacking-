```javascript
function publier() {
  const message = document.getElementById("message").value.trim();
  if (message === "") {
    alert("Écris quelque chose !");
    return;
  }

  const post = document.createElement("div");
  post.innerHTML = `<p>${message}</p><hr>`;
  document.getElementById("feed").prepend(post);

  document.getElementById("message").value = "";
}
```
```javascript
   function publier() {
     const message = document.getElementById("message").value.trim();
     if (message) {
       const post = document.createElement("div");
       post.textContent = message;
       document.getElementById("feed").prepend(post);
       document.getElementById("message").value = "";
     }
   }
   ```
