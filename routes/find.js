var express = require('express');
var router = express.Router();
var Order = require('../models/Order');

router.get('/', function(req, res) {
  Order.model.find(function(err, orders) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(JSON.stringify(orders));
    }
  });
});

module.exports = router;
