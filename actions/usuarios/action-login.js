'use strict'

const callback = require('./../../callback-http-200');
//const getQuery = require('./../getQuery');

module.exports = (Model) => {
    return (req, res) => {
      let obj = req.body;
      var query = Model.find({});

      query.where('email', obj.email);
      query.where('senha', obj.senha);
      query.exec( (error,users) => callback(error, users, res));

      //Model.find(obj, (error, users) =>	callback(error, users, res));
  }
}
