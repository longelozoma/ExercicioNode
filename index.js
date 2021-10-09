// importando express
const express = require("express");
// importando mongoose 
const mongoose = require("mongoose");

// requerindo modelo
const alunos = require("./modelo/modelo");

// criando a porta 
const porta = 3000

// criando app 
const app = express();

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/escola').then(function(){
    console.log("conectado com sucesso")
}).catch(function(){
    console.log("erro ao conecta-se ao banco de dados")
})


// requerindo a rota 
const rota = require("./rotas/rotas");
rota(app)




app.listen(porta,function(){
    console.log("app rondando na url http://localhost:"+porta+"/alunos")
})