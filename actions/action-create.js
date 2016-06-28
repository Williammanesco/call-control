'use strict'

const callback = require('./../callback-http-200');
const getQuery = require('./../getQuery');

module.exports = (Model) => {
  return (req, res) => {
    let obj = req.body;
    let qry = getQuery(req);

    Model.create(obj, (err, data) => callback(err, data, res));
  }
}
