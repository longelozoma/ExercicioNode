// requerindo mongoose 
const mongoose = require("mongoose");

// importando modelo
const alunos = mongoose.model("alunos");

// criando post 
exports.novoAluno = function(req,res){
    let aluno = new alunos(req.body)
    aluno.save(function(erro,aluno){
        if(erro){
            res.send({
                erro:"Falha ao matricular aluno"
            })
        }else{
            res.send({aluno})
        }
    })
}

// criando get 
exports.todosAlunos = async function(req,res){
    try{
        const estudantes = await alunos.find();
        return res.send({estudantes})
    }catch(erro){
        res.send({erro:"Nenhum aluno encontrado"})
    }
}

// criando get por id
exports.alunoId = function(req,res){
    const estudantes = alunos.findOne({"_id":req.params.id}, function(erro,aluno){
        if(erro){
            res.send({erro:"Aluno não encontrado"})
        }else{
            res.send({aluno})
        }
    })
}

// criando put 
exports.atualiza = function(req,res){
    alunos.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(erro,aluno){
        if(erro){
            res.send({erro:"Não foi possivel atualizar"})
        }else{
            res.send({aluno})
        }
    })
}

// deletando 
exports.elinminar = function(req,res){
    alunos.deleteOne({_id:req.params.id}, function(erro,aluno){
        if(erro){
            res.send({erro:"Aluno não encontrado"})

        }else{
            res.send({aluno:"Eliminado com sucesso"})
        }
    })
}