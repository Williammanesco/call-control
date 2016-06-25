'use strict'

const callback = require('./../callback-http-200');

module.exports = (Model) => {
     return (req, res) => {
      let query = { _id: req.params.id }
      Model.remove(query, (err, data) => callback(err, data, res));
  }
}
