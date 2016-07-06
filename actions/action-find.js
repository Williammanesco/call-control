'use strict'

const callback = require('./../callback-http-200');
const getQuery = require('./../getQuery');

module.exports = (Model) => {
    return (req, res) => {
      let obj = req.body;
      let query = getQuery(req);
      Model.find(query, (error, users) =>	callback(error, users, res));
  }
}
