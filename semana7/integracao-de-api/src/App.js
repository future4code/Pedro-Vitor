import React from "react"
import axios from "axios"

import SignUp from "./Components/signUp/SignUp"
import UserList from "./Components/userList/UserList"

export default class App extends React.Component {
    state = {
        userList: [],
        inputValue: ""
    }
    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value})
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
            this.setState({userList: r.data.result.list})
        })
            .catch((err) => {
                console.log(err.response.data)
            })
    }

    addNewUser = () => {

    }
    render(){
        return(
            <div className="App">
                <SignUp
                />
                <UserList/>
            </div>
        )
    }
}

