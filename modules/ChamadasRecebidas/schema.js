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
, data: {type: Date, default: new Date() }
}

/*
db.chamadasrealizadas.save({
  id_grupo:ObjectId('577c4277b4b2a07c1ed7f52b'),
  nome_usuario:'William Manesco',
  telefone:'(44) 9957-1781',
  duracao: '00:15',
  finalizada: 'S'
})
*/

module.exports = new Schema(_Schema);
