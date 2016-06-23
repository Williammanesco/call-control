'use strict'
const getQuery = require('./../getQuery');
const callback = require('./../callback-http-200');

module.exports = (Model) => {
   return (req, res) => {
      let queryData = getQuery(req);
      const conditions = {_id: queryData._id};
      Model.update(conditions, queryData, (err, data) => callback(err, data, res));
  }
}
