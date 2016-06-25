'use strict'

const callback = require('./../callback-http-200');
const querystring = require('querystring');

module.exports = (Model) => {
  return (req, res) => {
    let obj = req.body;
    Model.create(obj, (err, data) => callback(err, data, res));
  }
}
