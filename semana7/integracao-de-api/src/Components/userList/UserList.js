import React from "react"
import styled from "styled-components"
import axios from "axios";

const ListContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

export default class UserList extends React.Component {
    state = {
        userList: []
    }

    componentDidMount() {
        this.getUserList()
    }

    deleteUser = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            {
                headers: {
                    Authorization: "pedro-vitor-cruz"
                }
            }
        ).then(r => {
            alert("Usuario excluido")
            console.log(r)
        }).catch(e => {
            alert("Erro ao excluir usuario")
            console.log(e)
        })
    }

    getUserList = () => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                headers: {
                    Authorization: "pedro-vitor-cruz"
                }
            }
        ).then((r) => {
            this.setState({userList: r.data})
        })
            .catch((err) => {
                console.log(err.response.data)
            })
    }

    render() {
        const mapUsers = this.state.userList.map((user) => {
            return (
                <div key={user.id}>
                    <li>{user.name}</li>
                    <button onClick={() => this.deleteUser(user.id)}> Deletar usuario </button>
                </div>
            )
        })

        return (<ListContainer>
                <h3> Usuarios Cadastrados </h3>
                {mapUsers}
            </ListContainer>
        )
    }
}