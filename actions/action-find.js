'use strict'

const callback = require('./../callback-http-200');
const getQuery = require('./../getQuery');

module.exports = (Model) => {
    return (req, res) => {
      let obj = req.body;
      Model.find(obj, (error, users) =>	callback(error, users, res));
  }
}
