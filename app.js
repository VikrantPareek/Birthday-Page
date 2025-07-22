const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/wish", (req, res) => {
    let {username} = req.query;
  res.render("wish.ejs", {username});
});

app.listen(8080, () => {
  console.log("server is started");
});
