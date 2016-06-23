'use strict'

const mongoose = require('mongoose');
const UserSchema = require('./schema');
const UserModel = mongoose.model('User', UserSchema);
const create = require('./../../actions/action-create')(UserModel);
const find = require('./../../actions/action-find')(UserModel);
const update = require('./../../actions/action-update')(UserModel);
const remove = require('./../../actions/action-remove')(UserModel);

module.exports = {
   find: find
 , create: create
 , update: update
 , remove: remove
}
