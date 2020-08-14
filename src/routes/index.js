var express = require("express");
var router = express.Router();
const index_controller = require("../controllers/index_controller");
const cors = require("cors");
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.json({ extended: false });

router.get("/", function (req, res, next) {
  res.render("home.html");
});

module.exports = router;
