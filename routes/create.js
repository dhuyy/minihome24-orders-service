var express = require('express');
var router = express.Router();
var Order = require('../models/Order').model;

router.post('/', function(req, res) {
  new Order({
    productId: req.body.productId,
    pricingId: req.body.pricingId
  }).save(function(err, order) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(order);
    }
  });
});

module.exports = router;
