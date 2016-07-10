const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _UsersSchema = {
  nome_usuario: String
, telefone_usuario: String
}
const Users = new Schema(_UsersSchema);

const _Schema = {
  nome: {
    type: String
  , required: true
  , index: true
  }
  , id_usuario: Schema.Types.ObjectId
  , usuarios: [Users]
}

module.exports = new Schema(_Schema);
