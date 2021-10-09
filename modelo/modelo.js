// importando mongoose
const mongoose = require("mongoose");
// criando variavel esquema
const esquema = mongoose.Schema;

const aluno = esquema({
    nome:{type:String},
    idade:{type:Number},
    turma:{type:String}
})



module.exports = mongoose.model("alunos",aluno)