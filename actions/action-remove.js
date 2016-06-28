'use strict'

const callback = require('./../callback-http-200');
const getQuery = require('./../getQuery');
module.exports = (Model) => {
     return (req, res) => {
      let query = getQuery(req);

      console.log(query);
      Model.remove(query, (err, data) => callback(err, data, res));
  }
}
