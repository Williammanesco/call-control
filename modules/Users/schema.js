const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _Schema = {
  email: {
    type: String
  , required: true
  , index: true
  }
  , password: {
      type: String
    , required: true
    , index: true
    }

}
module.exports = new Schema(_Schema);
