const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _Schema = {
  id_grupo: {
    type: Schema.Types.ObjectId
  , required: true
  , index: true
  }
, nome_usuario: String
, telefone: String
, duracao: String
, finalizada: String
, data: { type: Date, default: Date.now }
}

module.exports = new Schema(_Schema);
