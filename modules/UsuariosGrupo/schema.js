const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _Schema = {
  id_grupo: Schema.Types.ObjectId
, nome_usuario: String
, telefone_usuario: String
}

module.exports = new Schema(_Schema);
