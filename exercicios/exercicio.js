const qntdPessoas = parseInt(prompt("Quantas pessoas vão ir?"))

const nomeRefri = prompt("Qual refrigerante você vai comprar?")
const precoRefri = parseInt(prompt("Qual preço do refrigerante?"))
const qntdRefri = parseInt(prompt("Qual a quantidade de refrigerantes a ser comprado?"))

const tipoSalgado1 = prompt("Qual salgado voce vai comprar?")
const tipoSalgado2 = prompt("Qual salgado voce vai comprar?")
const precoSalgado = parseInt(prompt("Qual o preco dos salgados?"))
const qntdSalgado = parseInt(prompt("Quantos salgados vai comprar?"))

const taxa = 10

somaRefri = (precoRefri + qntdRefri) * qntdPessoas
somaSalgado = (precoSalgado + qntdSalgado) * qntdPessoas
somaTotal = somaRefri + somaSalgado + taxa

alert(` O total para ${qntdPessoas} Será ${somaRefri} Para os refrigerantes,\n
     ${somaSalgado} Para os salgados ${tipoSalgado1} e ${tipoSalgado1} e a taxa será ${taxa}.\n
    dando o total de ${somaTotal} `

)