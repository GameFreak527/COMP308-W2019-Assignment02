/*
Contact JS
Name - Shiv Rana
Student Id - 300990505
Date - Feb-16-2019
*/

let express = require("express");
let router = express.Router();
let passport = require('passport');

let contactController = require("../controllers/contact");

/* GET Contact List page - READ Operation */
router.get("/", passport.authenticate('jwt',{session:false}), contactController.displayContactList);

/* Add into Contact List page - Insert Operation */
router.post("/add", passport.authenticate('jwt',{session:false}), contactController.processAddPage);

/* GET request to perform the delete action */
router.post("/delete/:id", passport.authenticate('jwt',{session:false}), contactController.performDelete);

/* POST request - Update the database with data from the Edit Page */
router.post("/edit/:id", passport.authenticate('jwt',{session:false}), contactController.processEditPage);

/* GET Request - Display edit page with default values into it */
router.get("/edit/:id", passport.authenticate('jwt',{session:false}), contactController.displayEditPage);

module.exports = router;
