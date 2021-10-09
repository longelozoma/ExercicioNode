module.exports = function(rota){
    const alunos = require("../control/control");


    rota.route("/alunos").post(alunos.novoAluno);
    rota.route("/alunos").get(alunos.todosAlunos);

    rota.route("/alunos/:id").get(alunos.alunoId);
    rota.route("/alunos/:id").put(alunos.atualiza);
    rota.route("/alunos/:id").delete(alunos.elinminar)
}