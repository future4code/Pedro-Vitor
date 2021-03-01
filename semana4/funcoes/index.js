// EXERCÍCIO 1

// function minhaFuncao(variavel) {
//     return variavel * 5
// }
//
// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
// a. Vai usar o valor da variavel informado no console log e aplicar o codigo da função.
// 2*5 e 5*10.
// b. Vai ser executado normalmente, porém nada sera printado.

// EXERCÍCIO 2

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];
//
// const outraFuncao = function(array) {
//     for (let i = 0; i < 2; i++) {
//         console.log(array[i])
//     }
// }
//
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
// function aboutMe(){
//     console.log("Eu sou Pedro, tenho 21 anos, moro em São Paulo e sou estudante.")
// }
//     aboutMe()
// b.
// function sobreMim() {
//     if (confirm(estudante)) {
//         estudanteSimNao.push(" e sou")
//     } else {
//         estudanteSimNao.push(" e não sou")
//     }
//
//     console.log("Eu sou " + nome[0] + " tenho " + idade[0] + " anos, moro em " + endereco[0] + estudanteSimNao + " estudante.")
// }
//
// let nome = []
// let idade = []
// let endereco = []
// let estudante = "Você é estudante?"
// let estudanteSimNao = []
//
// let inputNome = prompt("Qual o seu nome?")
// nome.push(inputNome)
//
// let inputIdade = prompt("Qual a sua idade?")
// idade.push(inputIdade)
//
// let inputEndereco = prompt("Qual o seu endreço?")
// endereco.push(inputEndereco)
//
// sobreMim(nome, idade, endereco, estudante, estudanteSimNao)

// EXERCICIO 5
//a.
// const soma1 = valores(25, 30)
//
// console.log(soma1)
//
// function valores(valor1, valor2) {
//     const soma = valor2 + valor2
//     return soma
// }

//b.

// EXERCÍCIO 6

