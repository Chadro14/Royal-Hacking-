js
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let posts = [];

const adminCode = "252006";

app.get("/", (req, res) => {
  res.render("home", { posts });
});

app.post("/publish", (req, res) => {
  const { code, content } = req.body;
  if (code === adminCode && content) {
    posts.unshift({ content, date: new Date().toLocaleString() });
  }
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const { index, code } = req.body;
  if (code === adminCode) posts.splice(index, 1);
  res.redirect("/");
});

module.exports = app;
