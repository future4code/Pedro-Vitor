// **Exercícios de interpretação de código**
// **Exercicio 1**
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
// a. false
resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
// b. false
resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
// c.(bool1 || bool1) Vai retornar true, porém não entendi a parte do !resultado &&
console.log("e. ", typeof resultado)
// e. boolean

// **Exercicio 2**
let array
console.log('a. ', array)
// a.
array = null
console.log('b. ', array)
// b. null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// c. 11
let i = 0
console.log('d. ', array[i])
// d. 3
array[i + 1] = 19
console.log('e. ', array)
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const valor = array[i + 6]
console.log('f. ', valor)
// f. 9


// **Exercícios de escrita de código**
// Exercício 1
const idade = prompt("Qual a sua idade?")
console.log("Qual a sua idade?")
console.log("Eu tenho", idade + " anos de idade")

const idadeAmigx = prompt("Qual a idade do seu/sua melhor amigo(a)?")
console.log("Qual a idade do seu/sua melhor amigo(a)?")
console.log("A idade do meu melhor amigo é", idadeAmigx)

const idadeMaior = Number(idade) > Number(idadeAmigx);
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)

const diferencaIdade = Number(idade) - Number(idadeAmigx)
console.log("A diferença de idade entre vocês é de", diferencaIdade + " anos")


// Exercício 2
const numero = prompt("Insira um número par")
Number(numero)

console.log("Insira um número par")
console.log("Hmm... Número", numero)

const divisao = numero / 2
console.log("O seu número dividio por 2 é", divisao)
// Todos os valores digitados serão divididos por 2, incluindo números ímpares.


// Exercício 3
let listaDeTarefas = []

const tarefa1 = prompt("Preciso de 3 tarefas que você pretende fazer no seu dia, digite uma por uma logo abaixo:")
console.log("Preciso de 3 tarefas que você pretende fazer no seu dia, digite uma por uma logo abaixo:")
console.log(tarefa1)
listaDeTarefas.push(tarefa1)

const tarefa2 = prompt("Beleza, agora vamos pra segunda !")
console.log("Beleza, agora vamos pra segunda !")
console.log(tarefa2)
listaDeTarefas.push(tarefa2)

const tarefa3 = prompt("Vamos para a última !")
console.log("Vamos para a última !")
console.log(tarefa3)
listaDeTarefas.push(tarefa3)

console.log("Lista com as tarefas que você tem por fazer:", listaDeTarefas)

const removerTarefa = prompt("Digite o índice da tarefa que você deseja remover da lista, 0, 1 ou 2 respectivamente")
console.log("Digite o index da tarefa que você deseja remover da lista, 0, 1 ou 2 respectivamente")

listaDeTarefas.splice(removerTarefa, 1)
console.log("Lista com as tarefas que você tem por fazer:", listaDeTarefas)


// Exercício 4
const nome = prompt("Qual o seu nome?")
const email = prompt("Qual o seu email?")

console.log("O e-mail", email, "foi cadastrado com sucesso. Seja bem-vinda(o)", nome, "!")
