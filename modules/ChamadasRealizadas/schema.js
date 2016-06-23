const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _Schema = {
  id_usuario: {
    type: Schema.Types.ObjectId
  , required: true
  , index: true
  }
, tel_origem: { type: String }
, duracao: { type: String }
, finalizada: { type: String }
}

module.exports = new Schema(_Schema);
