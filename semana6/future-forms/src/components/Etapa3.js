import React from "react"

export default class Etapa3 extends React.Component {
    render() {
        return <div>
            <h3> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h3>
            <p> 7. Por que você não terminou um curso de graduação? </p>
            <input type="text"/>
            <p> 8. Você fez algum curso complementar? </p>
            <select>
                <option> Nenhum</option>
                <option> Curso técnico</option>
                <option> Curso de inglês</option>
            </select>
        </div>

    }
}