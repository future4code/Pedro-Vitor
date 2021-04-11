import React from "react"
import styled from "styled-components"
import CreateNewPlaylist from "./pages/CreateNewPlaylist";
import UserPlaylist from "./pages/UserPlaylist";

const AppComponent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const SwitchButton = styled.button`
`


export default class App extends React.Component {
    state = {
        page: true
    }

    changePage = () => {
        if (this.state.page === true) {
            this.setState({page: false})
        } else if (this.state.page !== true) {
            this.setState({page: true})
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
            <AppComponent>
                <SwitchButton onClick={this.changePage}> Trocar de página </SwitchButton>
                {this.screenRender()}
            </AppComponent>
        )
    }
}
