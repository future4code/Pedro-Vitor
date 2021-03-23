import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from "styled-components"

const InputStyle = styled.input`
    border-radius: 0;
    margin: 1%;
`
const ButtonStyle = styled.button`
    border-radius: 3px;
    backgroundcolor: red;
    
`
class App extends React.Component {
    state = {
        accounts: [
            {
                nomeUsuario: "Pedro",
                fotoUsuario: "https://picsum.photos/50/50",
                fotoPost: "https://picsum.photos/200/150",
            },
            {
                nomeUsuario: "Gabriel",
                fotoUsuario: "https://picsum.photos/50/51",
                fotoPost: "https://picsum.photos/200/151",
            },
            {
                nomeUsuario: "Nathan",
                fotoUsuario: "https://picsum.photos/50/53",
                fotoPost: "https://picsum.photos/200/153",
            }
        ],
        inputNomeUsuario: "",
        inputFotoUsuario: "",
        inputFotoPost: ""
    }
    addUserPost = () => {
        const userPost = {
            nomeUsuario: this.state.inputNomeUsuario,
            fotoUsuario: this.state.inputFotoUsuario,
            fotoPost: this.state.inputFotoUsuario
        }
        const newPost = [...this.state.accounts, userPost]
        this.setState({accounts: newPost, inputNomeUsuario:"", inputFotoUsuario:"", inputFotoPost:""})
    }

    onChangeInputNomeUsuario = (event) => {
        this.setState({inputNomeUsuario:event.target.value})
    }

    onChangeInputFotoUsuario = (event) =>{
        this.setState({inputFotoUsuario:event.target.value})
    }

    onChangeInputFotoPost = (event) =>{
        this.setState({inputFotoPost:event.target.value})
    }

    render() {
        const userAccounts = this.state.accounts.map((accounts) => {
            return (
                <div className={'app-container'}>
                    <Post
                        nomeUsuario={accounts.nomeUsuario}
                        fotoUsuario={accounts.fotoUsuario}
                        fotoPost={accounts.fotoPost}
                        >
                    </Post>
                </div>
            )
        })
        return (
            <div className={'app-container'}>
                <h3>Insira aqui o seu post !</h3>
                <InputStyle className="input-container"
                    value={this.state.inputNomeUsuario}
                    onChange={this.onChangeInputNomeUsuario}
                    placeholder={"Nome de usuario"}
                />
                <InputStyle className="input-container"
                    value={this.state.inputFotoUsuario}
                    onChange={this.onChangeInputFotoUsuario}
                    placeholder={"Sua foto"}
                />
                <InputStyle className="input-container"
                    value={this.state.inputFotoPost}
                    onChange={this.onChangeInputFotoPost}
                    placeholder={"Seu post"}
                />
                <hr></hr>
                <ButtonStyle onClick={this.addUserPost}> Postar! </ButtonStyle>
                <hr></hr>
                <div>{userAccounts}</div>
            </div>
        );
    }
}

export default App;
