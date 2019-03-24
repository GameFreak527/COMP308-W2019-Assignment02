/*
Contact JS
Name - Shiv Rana
Student Id - 300990505
Date - Feb-16-2019
*/

let express = require("express");
let router = express.Router();

let contactController = require("../controllers/contact");

/* GET Contact List page - READ Operation */
router.get("/", contactController.displayContactList);

/* Add into Contact List page - Insert Operation */
router.post("/add", contactController.processAddPage);

/* GET request to perform the delete action */
router.get("/delete/:id", contactController.performDelete);

/* POST request - Update the database with data from the Edit Page */
router.post("/edit/:id", contactController.processEditPage);

module.exports = router;
