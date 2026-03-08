const btnCalcular = document.querySelector('#btnCalcular')

const nome = document.querySelector('#nome')

const inputNota1 = document.querySelector("#nota1")

const inputNota2 = document.querySelector("#nota2")

const inputNota3 = document.querySelector("#nota3")

const inputNota4 = document.querySelector("#nota4")

const nomeAluno = document.querySelector('#nomeAluno')

const media = document.querySelector('#Medias')

const mediaContainer = document.querySelector('.grades:last-child') 

const primeirobimestre = document.querySelector('#bimestre1')

const segundobimestre = document.querySelector('#bimestre2')

const terceirobimestre = document.querySelector('#bimestre3')

const quartobimestre = document.querySelector('#bimestre4')

btnCalcular.addEventListener("click" , clicou)  

function clicou(){
    nomeAluno.innerText = nome.value
    bimestre1.innerText = nota1.value
    bimestre2.innerText = nota2.value
    bimestre3.innerText = nota3.value
    bimestre4.innerText = nota4.value
    const mediavalor = calcularMedia()
    media.innerText = mediavalor
    
if (mediavalor >= 7){
 mediaContainer.style.backgroundColor = 'green'
} else{
 mediaContainer.style.backgroundColor = 'red'
}
   // mediaContainer.style.backgroundColor = 'red'

}
function calcularMedia (){
    const nota1 = parseFloat(inputNota1.value)
    const nota2 = parseFloat(inputNota2.value)
    const nota3 = parseFloat(inputNota3.value)
    const nota4 = parseFloat(inputNota4.value)
    return (nota1 + nota2 + nota3 + nota4) /4
}