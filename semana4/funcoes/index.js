// EXERCÍCIO 1

function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
// a. Vai usar o valor da variavel informado no console log e aplicar o codigo da função.
// 2*5 e 5*10.
// b. Vai ser executado normalmente, porém nada sera printado.

// EXERCÍCIO 2

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

const outraFuncao = function (array) {
    for (let i = 0; i < 2; i++) {
        console.log(array[i])
    }
}

// outraFuncao(arrayDeNomes)
// a. O código vai verificar se i = 0, caso isso acontece ele ira adicionar um, até chegar no 1 (começa do 0). Imprimindo os dois primeiros
// nomes no array.
// b. Vai printar "Amanda, Caio".

// EXERCÍCIO 3
//TODO
const metodo = (array) => {
    let arrayFinal = [];

    for (let x of array) {
        if (x % 2 === 0) {
            arrayFinal.push(x * x)
        }
    }

    return arrayFinal;
}
//


// EXERCÍCIO 4

// a.
function aboutMe() {
    console.log("Eu sou Pedro, tenho 21 anos, moro em São Paulo e sou estudante.")
}

aboutMe()

// b.
function sobreMim() {
    if (confirm(estudante)) {
        estudanteSimNao.push(" e sou")
    } else {
        estudanteSimNao.push(" e não sou")
    }

    console.log("Eu sou " + nome[0] + " tenho " + idade[0] + " anos, moro em " + endereco[0] + estudanteSimNao + " estudante.")
}

let nome = []
let idade = []
let endereco = []
let estudante = "Você é estudante?"
let estudanteSimNao = []

let inputNome = prompt("Qual o seu nome?")
nome.push(inputNome)

let inputIdade = prompt("Qual a sua idade?")
idade.push(inputIdade)

let inputEndereco = prompt("Qual o seu endereço?")
endereco.push(inputEndereco)

sobreMim(nome, idade, Number(endereco), estudante, estudanteSimNao)

// EXERCICIO 5

//a.
function resultado(valor1, valor2) {
    const soma = valor1 + valor2
    console.log("O total da some é:", soma)

    return soma
}

resultado(33, 27)

//b.
function resultado(valor1, valor2) {
    return valor1 >= valor2
}

resultado()

const trueOrFalse = resultado(3, 5)

console.log(trueOrFalse)

//c.
function receberMensagem(mensagemPrintadaDezVezes) {
    let mensagem = ("Printando isso 10x")
    for (let i = 0; i < 10; i++) {
        console.log(mensagem)
    }
}

receberMensagem()

// EXERCÍCIO 6

//a.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function arrayLength() {
    console.log(array.length)
}

arrayLength()

//b.
function numeroPar(numero) {
    return numero % 2 === 0
}

const resultado = numeroPar(35)
console.log(resultado)

//c.

function arrayNumerosPares(arrayNumeros) {
    let arrayPar = []
    for (const numero of arrayNumeros) {
        if (numero % 2 === 0) {
            arrayPar.push(numero)
        }
    }
    return arrayPar.length;
}

console.log(arrayNumerosPares(array))

//d.
function arrayNumerosPares2(arrayNumeros) {
    let arrayPar = []
    for (const numero of arrayNumeros) {
        if (numeroPar(numero)) {
            arrayPar.push(numero)
        }
    }
    return arrayPar.length;
}

console.log(arrayNumerosPares2(array))

