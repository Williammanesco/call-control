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
, data: {type: Date, default: Date.now }
}

/*
db.chamadasrealizadas.save({
  id_grupo:ObjectId('57757fdb625836b00482c1bc'),
  nome_usuario:'Alini linda',
  telefone:'(12) 3131-2312',
  duracao: '05:00',
  finalizada: 'S'
})
*/

module.exports = new Schema(_Schema);
