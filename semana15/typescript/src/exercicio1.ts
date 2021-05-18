//EXERCICIO 1

//a. Eu não posso atribuir um numero a uma string.
// const minhaString: string = 1

//b. Basta fazer o uso do union type |
// let meuNumero: number | string

//c.
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: pessoa = {
    nome: "Julius",
    idade: 32,
    corFavorita: "Azul"
}

const pessoa2: pessoa = {
    nome: "Gilbert",
    idade: 27,
    corFavorita: "Branco"
}

const pessoa3: pessoa = {
    nome: "Anna",
    idade: 54,
    corFavorita: "Amarelo"
}

enum CORES_DO_ARCO_IRIS {
    VIOLETA="Violeta",
    ANIL="Anil",
    AZUL="Azul",
    VERDE="Verde",
    AMARELO="Amarelo",
    LARANJA="Laranja",
    VERMELHO="Vermelho"
}

const pessoas: pessoa[] = []
pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(pessoa3)
console.log(pessoas)
for (let corFavorita in CORES_DO_ARCO_IRIS){
    console.log(corFavorita)
}