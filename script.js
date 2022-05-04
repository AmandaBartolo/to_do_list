// DATA
let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

let dia = new Date()
let ano = new Date()

let diaHoje = dia.getDate()
let mesHoje = meses[new Date().getMonth()]
let anoHoje = ano.getFullYear()

let data = document.querySelector("#data")

data.textContent = `${diaHoje} de ${mesHoje} de ${anoHoje}`

// ADICIONAR TAREFA
const tarefaInput = document.querySelector("#add-tarefa") //input
const btnAdd = document.querySelector("#btn-add")
const ulTarefa = document.querySelector("#lista-tarefas")
const liTarefa = document.querySelector("#item-tarefa")

tarefaInput.addEventListener('keypress', (e) => 
{
    if (e.keyCode == '13' && tarefaInput.value != '')      // o 13 é o enter
    {
        let tarefa = {
            nome: tarefaInput.value,
            id: gerarId()
        }
        addTarefa(tarefa)
    }
})

btnAdd.addEventListener ('click', (e) => 
{
    if (tarefaInput.value != '')     
    {
        let tarefa = {
            nome: tarefaInput.value,
            id: gerarId()
        }
        addTarefa(tarefa)
    }
})


function gerarId()
{
    return Math.floor(Math.random() * 30)  // arredonda o nº
}

function addTarefa(tarefa)
{
    let li = criarTagLI(tarefa)
    ulTarefa.appendChild(li)
    tarefaInput.value = ''
}

function criarTagLI(tarefa)
{
    let li = document.createElement('li')
    li.id = tarefa.id
    let span = document.createElement('span')
    let btnTrash = document.createElement('button')

    function crossOut(){
        li.classList.toggle("done");
    }
    
    li.addEventListener("click",crossOut);

    span.classList.add('texto-tarefa')
    span.innerHTML = tarefa.nome

    btnTrash.classList.add('btnAcao')
    btnTrash.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    btnTrash.setAttribute('onclick', 'excluir('+tarefa.id+')')

    li.appendChild(span)
    li.appendChild(btnTrash)
    return li
}



function excluir (idTarefa)
{
    let li = document.getElementById(''+ idTarefa + '')

    if (li)
    {
        ulTarefa.removeChild(li)
    }
}