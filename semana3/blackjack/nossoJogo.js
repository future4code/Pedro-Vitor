/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 *
 *
 const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

 console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
 console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 *
 *
 *
 */

let cartaJogador1 = comprarCarta()
let cartaJogador2 = comprarCarta()
let cartaPc1 = comprarCarta()
let cartaPc2 = comprarCarta()
let resultadoJogador = []
let resultadoPc = []

let blackjack = (confirm("Quer iniciar uma nova rodada?"))

console.log("Bem vindo ao jogo de Blackjack!")
if (blackjack) {
    console.log("Vamos iniciar uma rodada!")

    console.log("Usuário - cartas:", cartaJogador1.texto, cartaJogador2.texto, " - pontuação ", (cartaJogador1.valor + cartaJogador2.valor))
    console.log("Computador - cartas:", cartaPc1.texto, cartaPc2.texto, " - pontuação ", (cartaPc1.valor + cartaPc2.valor))

    resultadoJogador.push(cartaJogador1.valor + cartaJogador2.valor)
    resultadoPc.push(cartaPc1.valor + cartaPc2.valor)

    if (resultadoJogador[0] === resultadoPc[0]) {
        console.log("Empate !")

    } else if (resultadoJogador < resultadoPc) {
        console.log("O computador ganhou!")

    } else if (resultadoJogador > resultadoPc) {
        console.log("O usuário ganhou !")
    }

} else {
    console.log("O jogo acabou")

}