const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _Schema = {
  nome: {
    type: String
  , required: true
  , index: true
  }
  , identificador_dono: {
      type: String
//    , required: true
//    , index: true
    }
}

module.exports = new Schema(_Schema);
