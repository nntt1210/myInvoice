var express = require("express");
var siteModel = require("../models/site.model");

var router = express.Router();

router.get("/", (req, res) => {
  siteModel.all().then((rows) => {
    res.json(rows);
  });
});

router.get("/statistics", (reg, res) => {
  siteModel.statistics().then((rows) => {
    res.json(rows);
  });
});

router.post("/add", (req, res) => {
  siteModel.add(req.body).then(() => {
    console.log("req", req.body);
    res.status(201).json({
      ...req.body,
    });
  });
});

module.exports = router;
