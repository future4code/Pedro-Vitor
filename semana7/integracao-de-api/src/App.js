import React from "react"
import styled from "styled-components"
import SignUp from "./Components/signUp/SignUp"
import UserList from "./Components/userList/UserList"

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

export default class App extends React.Component {
    state = {
        page: "signUp",
    }

    changePage = () => {
        if (this.state.page === "userList") {
            this.setState({page: "signUp"})
        } else if (this.state.page === "signUp") {
            this.setState({page: "userList"})
        }
    }

    renderPage = () => {
        switch (this.state.page) {
            case "signUp":
                return <SignUp />
            case "userList":
                return <UserList />
            default:
                return <div> </div>
        }
    }

    render() {
        return (
            <Container>
                {this.renderPage()}
                <button onClick={this.changePage}> Change page</button>
            </Container>
        )
    }
}

