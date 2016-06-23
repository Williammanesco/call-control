const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _Schema = {
  nome: {
    type: String
  , required: true
  , index: true
  }
, email: {
    type: String
  , required: true
  , index: true
  }
  , senha: {
      type: String
    , required: true
    }

}
module.exports = new Schema(_Schema);
