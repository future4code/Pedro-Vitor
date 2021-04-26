import React, {useState, useEffect} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom";
import {BASE_URL} from "../constants/urls"
//E-mail: genericuser@labenu.com
//Password: 987654

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const login = async () => {
        const body = {
            email: email,
            password: password
        }

        axios
            .post(`${BASE_URL}/login`, body)
            .then(response => {
                console.log(response.data)
                window.localStorage.setItem("token", response.data.token)
                history.push("/admin/trips/list")
            })
    }

    useEffect(() =>{
        login()
    }, [])

    return (
        <div>
            <h1> Login </h1>
            <input value={email} placeholder="e-mail" onChange={handleEmail}/>
            <input value={password} placeholder="senha" onChange={handlePassword}/>
            <button onClick={login}> Enter</button>
        </div>
    )
}

export default LoginPage