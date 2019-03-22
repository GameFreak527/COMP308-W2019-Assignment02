/*
Contact JS
Name - Shiv Rana
Student Id - 300990505
Date - Feb-16-2019
*/

let express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
  res.render("contact", { title: "Contact" });
});

router.post("/", (req, res, next) => {
  //shows the input that user put
  console.log(req.body);
  //redirects to the home page
  res.redirect("/");
});

module.exports = router;
