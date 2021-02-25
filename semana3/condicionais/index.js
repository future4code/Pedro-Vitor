// EXERCÍCIO 1
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
    console.log("Passou no teste.")
} else {
    console.log("Não passou no teste.")
}
*/
// Ele pede para informar um numero, converte o user input em numero, se o número for par ele vai retornar "Passou no teste"
//caso contrario, retornara "Não passou no teste"

// EXERCÍCIO 2
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
    case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
    default:
        preco = 5
        break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
 */
//a. Seria uma espécie de "loja", o usuário escolhe a fruta que ele quer, e então é informado o valor do item para o mesmo.
//b. O preço da fruta Maçã é R$ 2.25
//c. O preço da fruta Pêra é R$ 5 - Vai continuar printando ao invés de parar em 5.5

// EXERCÍCIO 3
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
    console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/
//a. Pedindo para o usuario inserir um número, caso um numero não seja inserido o programa não irá funcionar.
// b. Número 10 digitado: "Esse número passou no teste" 10 é maior que 0
// b. Número -10 digitado: variavel mensagem não foi atribuida, portanto o usuario receberá um erro.
// TODO c. Adicionar else{console.log("Essa mensagem é secreta!!!")} conserta o erro, porém ainda preciso ver o que ta rolando

// EXERCÍCIO 4
/*
const usuarioIdade = []

let idade = Number(prompt("Insira a sua idade"))
usuarioIdade.push(idade)

if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}
 */

// EXERCÍCIO 5
/*
const turnoDigitado =prompt("Qual turno você você estuda? Digite M para Matutino, V para Vesperino ou N para Nortuno.")

if(turnoDigitado === "M"){
    console.log("Bom Dia!")
}
if(turnoDigitado === "V") {
    console.log("Boa Tarde !")
}
if(turnoDigitado === "N"){
    console.log("Boa Noite !")}
 */

// EXERCÍCIO 6
/*
const turnoDigitado =prompt("Qual turno você você estuda? Digite M para Matutino, V para Vesperino ou N para Nortuno.")
switch(turnoDigitado){
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde !")
        break
    case "N":
        console.log("Boa Noite !")
        break
}
 */
// EXERCÍCIO 7
/*
let generoDoFilme = prompt("Qual o genero do filme que você gostaria de assistir?")
let precoDoIngresso = prompt("Qual a faixa de preço para o ingresso?")

if(generoDoFilme === "Fantasia" && precoDoIngresso <= 15){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}
 */