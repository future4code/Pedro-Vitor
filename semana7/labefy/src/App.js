import React from "react"
import styled from "styled-components"
import axios from "axios"
import CreateNewPlaylist from "./pages/CreateNewPlaylist";
import UserPlaylist from "./pages/UserPlaylist";

const AppComponent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default class App extends React.Component {
    state = {
        page: true
    }

    changePage = () => {
        if (this.state.page === true) {
            this.setState({page: false })
        } else if (this.state.page !== true ) {
            this.setState({page: true })
        }
    }

    screenRender = () => {
        switch (this.state.page) {
            case true:
                return <CreateNewPlaylist/>
            case false:
                return <UserPlaylist/>
            default:
                return <div> </div>
        }
    }

    render() {
        return (
            <div>
                <AppComponent>
                    <button onClick={this.changePage}> XXXXXXX</button>
                    {this.screenRender()}
                </AppComponent>
            </div>
        )
    }
}
