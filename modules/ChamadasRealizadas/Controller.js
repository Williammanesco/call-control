'use strict'

const mongoose = require('mongoose');
const UserSchema = require('./schema');
const Model = mongoose.model('ChamadasRealizada', UserSchema);
const create = require('./../../actions/action-create')(Model);
const find = require('./../../actions/action-find')(Model);
const update = require('./../../actions/action-update')(Model);
const remove = require('./../../actions/action-remove')(Model);

module.exports = {
   find: find
 , create: create
 , update: update
 , remove: remove
}
