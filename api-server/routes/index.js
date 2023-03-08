var express = require('express');
var router = express.Router();
var Validator = require('jsonschema').Validator;


/* GET server time. */
router.get('/time', function (req, res, next) {

  const token = req.get("Authorization");

  var v = new Validator();
  var epoch = { epoch: Math.floor(new Date().getTime() / 1000) };
  var schema = require("../public/schemas/epoch.schema.json");
  var validate = v.validate(epoch, schema);

  if (validate.valid) {
    res.json(epoch);
  } else {
    throw console.error("Invalid epoch");
  }
});

module.exports = router;
