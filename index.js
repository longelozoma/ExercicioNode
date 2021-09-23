// importando express
const express = require("express");
// importando mongoose 
const mongoose = require("mongoose");

// criando a porta 
const porta = 3000

// criando app 
const app = express();

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/tarefa').then(function(){
    console.log("conectado com sucesso")
}).catch(function(){
    console.log("erro ao conecta-se ao banco de dados")
})







app.listen(porta,function(){
    console.log("app rondando na url http://localhost:"+porta)
})