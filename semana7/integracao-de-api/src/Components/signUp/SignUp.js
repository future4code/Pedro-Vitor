import React from "react"
import styled from "styled-components"
import axios from "axios";

const SignUpContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

export default class signUp extends React.Component {
    state ={
        inputName: "",
        inputEmail: ""
    }

    onChangeName = (event) => {
        this.setState({inputName: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    addNewUser = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }

        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
                headers: {
                    Authorization: "pedro-vitor-cruz"
                }
            }
        ).then((r) => {
            alert("Usuario cadastrado com sucesso !")
            this.setState({inputName: "", inputEmail: ""})
        }).catch((err) => {
            alert("Por favor, preencha todos os dados")
            console.log(err)
        })

    }

    render() {
        return (
            <SignUpContainer>

                <div> Nome</div>
                <input
                    type="text"
                    required={true}
                    placeholder={"Nome do usuario"}
                    value={this.state.inputName}
                    onChange={this.onChangeName}/>

                <div> E-mail</div>
                <input
                    type="email"
                    required={true}
                    placeholder={"E-mail"}
                    value={this.state.inputEmail}
                    onChange={this.onChangeEmail}
                />

                <button onClick={this.addNewUser}> Submit !</button>
            </SignUpContainer>
        )
    }
}