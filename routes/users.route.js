const express = require("express");
const usersControllers = require("../controllers/users.controller.js");

const router = express.Router();

/*************************************
 * @api {get} /all   All Users
 * @apiDescription Get all the users
 **************************************/
router.route("/all").get(usersControllers.getAllUsers);

/*************************************
 * @api {get} /random   Random User
 * @apiDescription Get Random User
 **************************************/
router.route("/random").get(usersControllers.getRandomUser);

/*************************************
 * @api {post} /save  Add a user
 * @apiDescription Add new a user
 **************************************/
router.route("/save").post(usersControllers.saveAUser);

/*************************************
 * @api {delete} /delete  Delete a user
 * @apiDescription Delete a user
 **************************************/
router.route("/delete").delete(usersControllers.deleteAUser);

/*************************************
 * @api {patch} /update   Update a user
 * @apiDescription Update a user
 **************************************/
router.route("/update").get(usersControllers.updateAUser);

module.exports = router;
