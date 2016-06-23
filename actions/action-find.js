'use strict'

const getQuery = require('./../getQuery');
const callback = require('./../callback-http-200');

module.exports = (Model) => {
    return (req, res) => {
      const query = getQuery(req);
      Model.find(query, (error, users) =>	callback(error, users, res));
  }
}
