import React from "react"

export default class Etapa1 extends React.Component {
    render() {
        return <div>
            <h3> ETAPA 1 - DADOS GERAIS </h3>
            <p> 1. Qual o seu nome? </p>
            <input type="text"/>
            <p> 2. Qual a sua idade? </p>
            <input type="text"/>
            <p> 3. Qual o seu email? </p>
            <input type="text"/>
            <p> 4. Qual a sua escolaridade? </p>
            <select>
                <option> Ensino médio incompleto</option>
                <option> Ensino médio completo</option>
                <option> Ensino superior incompleto</option>
                <option> Ensino superior completo</option>
            </select>
        </div>

    }
}
