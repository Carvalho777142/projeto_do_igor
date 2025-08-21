var listaTarefas = []


// Pega o formulario de cadastro

var formCadastro = document.getElementById("formCadastroTarefa")

formCadastro.addEventListener("submit", function(event){
    event.preventDefault(); //bloqueia os eventos padrões
    
    var form = new FormData(this);

    var tarefa = form.get("tarefa")

    console.log(tarefa)

    listaTarefas.push(tarefa)

    console.log(listaTarefas)
    document.getElementById('numTarefas').innerHTML = listaTarefas.length
    
})