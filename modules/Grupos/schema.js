const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _Schema = {
  nome: {
    type: String
  , required: true
  , index: true
  }
  , id_usuario: Schema.Types.ObjectId

}

module.exports = new Schema(_Schema);
