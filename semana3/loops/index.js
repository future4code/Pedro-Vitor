//EXERCÍCIO 1

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
// a. Vai printar  10

// EXERCÍCIO 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
    console.log(numero)
  }
}
let especifico = lista.indexOf(11)
console.log(especifico)

// a. Vai printar todos os numeros do array que são maiores que 19
// b. For...of não mostra o indice, mas sim os valores do array;
// poderiamos usar indexOf para checar o index de um item especifico que está no array.

// EXERCÍCIO 3

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayOriginalPar = []
//a.
for(let i= 0; i <arrayOriginal.length; i++){
  console.log(arrayOriginal[i])
}
//b.
for (let i = 0; i < arrayOriginal.length; i++){
  console.log(arrayOriginal[i] / 10)
}

// TODO
// c.
for(let i = 0; i < arrayOriginal.length; i++){
  if (arrayOriginal[i] % 2 === 0)
  arrayOriginalPar.push(arrayOriginal[i])
  console.log(arrayOriginalPar)
}

// d. TODO





