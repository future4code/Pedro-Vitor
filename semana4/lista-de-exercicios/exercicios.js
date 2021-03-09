//Exercício 1

function inverteArray(array) {
    const reversed = array.reverse();
    return reversed
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
    let evenNumbers2 = []

    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers2.push(array[i] ** 2)
        }
    }
    return evenNumbers2
}

//Exercício 3

function retornaNumerosPares(array) {
    let evenNumbers = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i])
        }
    }
    return evenNumbers
}

//Exercício 4

function retornaMaiorNumero(array) {
    return Math.max(10, 18, 7, 56, 39)
}

//Exercício 5

function retornaQuantidadeElementos(array) {
    for (let number of array) {
    }
    return array.length
}

//Exercício 6
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2
const booleano4 = !booleano3

function retornaExpressoesBooleanas() {
    const finalResult = []
    let result1 = booleano1 && booleano2 && !booleano4
    let result2 = (booleano1 && booleano2) || !booleano3
    let result3 = (booleano2 || booleano3) && (booleano4 || booleano1)
    let result4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
    let result5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

    finalResult.push(result1, result2, result3, result4, result5)
    return (finalResult)
}

//Exercício 7
function retornaNNumerosPares(n) {
    let newArray = []
    for (i = 0; newArray.length < n; i++) {
        if (i % 2 === 0) {
            newArray.push(i)
        }
    }
    return newArray
}

// Exercício 8


function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        return "Escaleno"
    } else if (a === b && b === c) {
        return "Equilátero"
    } else {
        return "Isósceles"
    }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
    // TODO
}

// Exercício 10

function segundoMaiorEMenor(array) {
    // TODO
}

//Exercício 11

function ordenaArray(array) {
    array.sort(function(a, b) {
        return a - b
    })
    return array
}

// Exercício 12

function filmeFavorito() {
    return {
        nome: "O Diabo Veste Prada",
        ano: 2006,
        diretor: "David Frankel",
        atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }
}

// Exercício 13

function imprimeChamada() {
    const movie = {
        nome: "O Diabo Veste Prada",
        ano: 2006,
        diretor: "David Frankel",
        atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }
    return `Venha assistir ao filme ${movie.nome}, de ${movie.ano}, dirigido por ${movie.diretor} e estrelado por ${movie.atores[0]}, ${movie.atores[1]}, ${movie.atores[2]}, ${movie.atores[3]}.`

}

// Exercício 14

function criaRetangulo(lado1, lado2) {
    let retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: (lado1 * lado2)
    }
    return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
    const pessoas = {
        nome: "Astrodev",
        idade: 25,
        email: "astrodev@future4.com.br",
        endereco: "Rua do Futuro, 4"
    }
    return{
        ...pessoas,
        nome: "ANÔNIMO"
    }
}

// Exercício 16

const arrayDePessoas = [
    {nome: "Pedro", idade: 20},
    {nome: "João", idade: 10},
    {nome: "Paula", idade: 12},
    {nome: "Artur", idade: 89}
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
    const adultos = arrayDePessoas.filter((pessoa) => {
        return pessoa.idade >= 20
    })
    return adultos
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
    const menores = arrayDePessoas.filter((pessoa) => {
        return pessoa.idade < 20
    })
    return menores
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
    return array.map(i => i * 2)

}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
    const multiply = array.map((number) => {
        return(number *2).toString()
    })
    return multiply
}

// Exercício 17, letra C

function verificaParidade(array) {
    const multiply = array.map((number)=>{
        if (number % 2 === 0){
            return `${number} é par`
        } else{
            return `${number} é ímpar`
        }
    })
    return multiply

}

// Exercício 18

const pessoas = [
    {nome: "Paula", idade: 12, altura: 1.8},
    {nome: "João", idade: 20, altura: 1.3},
    {nome: "Pedro", idade: 15, altura: 1.9},
    {nome: "Luciano", idade: 22, altura: 1.8},
    {nome: "Artur", idade: 10, altura: 1.2},
    {nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
    let autorizadas = []
    for (let pessoa of pessoas){
        if(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5){
            autorizadas.push(pessoa)
        }
    }
    return autorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
    let naoAutorizadas = []
    for (let pessoa of pessoas) {
        if (pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5) {
            naoAutorizadas.push(pessoa)
        }

    }
    return naoAutorizadas
}
//Exercício 19

const consultas = [
    { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
    { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta() {
    // TODO
}

//Exercício 20

const contas = [
    {cliente: "João", saldoTotal: 1000, compras: [100, 200, 300]},
    {cliente: "Paula", saldoTotal: 7500, compras: [200, 1040]},
    {cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000]},
    {cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700]},
    {cliente: "Artur", saldoTotal: 1800, compras: [200, 300]},
    {cliente: "Soter", saldoTotal: 1200, compras: []}
]

function atualizaSaldo() {
    // TODO
}