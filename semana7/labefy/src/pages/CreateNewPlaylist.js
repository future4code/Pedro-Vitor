import React from "react"
import styled from "styled-components"
import axios from "axios"

const CreatePlaylist = styled.div`
color: green;
`

const SendButton = styled.button`
`

const InputBox = styled.input`
`

export default class CreateNewPlaylist extends React.Component {
    state = {
        inputValue: ""
    }

    inputChange = (event) => {
        this.setState({inputValue: event.target.value})
    }

    createPlaylist = () => {
        const body = {
            name: this.state.inputValue
        }
        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            body,
            {
                headers: {
                    Authorization: "pedro-vitor-cruz"
                }
            }
        ).then((r) => {
            console.log(r)
            this.setState({inputValue: ""})
        })
            .catch((e) => {
                alert("The chosen playlist name is already being used.")
                console.log(e)
            })
    }

    render() {
        return (
            <CreatePlaylist>
                <h2> Create a new Playlist ! </h2>
                <hr/>
                <p> Playlist name</p>
                <InputBox
                    type="text"
                    onChange={this.inputChange}
                    value={this.state.inputValue}/>

                <SendButton onClick={this.createPlaylist}> Send </SendButton>
            </CreatePlaylist>
        )
    }
}