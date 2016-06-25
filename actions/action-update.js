'use strict'
const callback = require('./../callback-http-200');

module.exports = (Model) => {
   return (req, res) => {
      let query = { _id: req.params.id };
      let mod = req.body;
      let options = { runValidators: true };

      Model.update(query, mod, options, (err, data) => callback(err, data, res));
  }
}
