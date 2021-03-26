import React from "react"
import styled from "styled-components"
import axios from "axios"

const LibraryContainer = styled.div`
color: red;
`
export default class UserPlaylist extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.getPlaylists()
    }

    getPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            {
                headers: {
                    Authorization: "pedro-vitor-cruz"
                }
            }
        ).then((r) => {
            this.setState({playlists: r.data.result.list})
        })
            .catch((err) => {
                console.log(err)
            })
    }

    delPlaylist = (playlist) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}`)
            .then((r) => {
                console.log(r)
            }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        const playlistName = this.state.playlists.map((library) =>
            <div>
                <li>{library.name}</li>
                <button onClick={this.delPlaylist(playlist)}> X </button>
            </div>
        )
        return (
            <LibraryContainer>
                {playlistName}
            </LibraryContainer>
        )
    }
}