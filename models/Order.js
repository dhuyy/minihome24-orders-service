var mongoose = require('mongoose');
var ordersModel = {};

var Order = mongoose.model('Orders',
  new mongoose.Schema({
    productId: String,
    pricingId: String
  }, {
    timestamps: true
  })
);

ordersModel.model = Order;

module.exports = ordersModel;