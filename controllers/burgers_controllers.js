var express = require("express");
var burgers = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/burgers");
  });

router.get("/burgers", function(req, res) {
  burgers.all(function(burgerData) {
    res.render("index", {burger_data: burgerData})
  });
});

router.post("/burgers/create", function(req, res) {
    burgers.create(req.body.burger_name, function(data){
      console.log(data);
      res.redirect("/");
    });
  });

router.put("/burgers/:id", function(req, res){
  burgers.update(req.params.id, function(data){
    console.log(data);
    res.sendStatus(200);
  });
});

module.exports = router;
