const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _Schema = {
  id_grupo: Schema.Types.ObjectId
, id_usuario: Schema.Types.ObjectId
}

module.exports = new Schema(_Schema);
