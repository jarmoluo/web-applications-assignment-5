var express = require("express");
var router = express.Router();

// Require controllers
var board_controller = require("../controllers/boardController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// POST request for clearing the board
router.post("/reset", board_controller.reset);

module.exports = router;
