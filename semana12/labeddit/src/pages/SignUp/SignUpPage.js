import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {
    Container,
    InputsContainer,
    ButtonContainer
} from "./styled";
import {BASE_URL} from "../../constants/urls";
import axios from "axios";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch',
        },
        '& > *': {
            margin: theme.spacing(1),
        }
    }
}))

const SignUpPage = () => {
    const classes = useStyles();

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const signUp = async () => {
        const body = {
            email: email,
            password: password,
            username: username
        }
        await axios
            .post(`${BASE_URL}/signup`, body)
            .then(response => {
                window.localStorage.setItem("token", response.data.token)
                history.push("/feed")
                alert("Usuario cadastrado com sucesso!")
            })
    }

    return (
        <Container>
            <form className={classes.root} noValidate autoComplete="off">
                <InputsContainer>
                    <TextField
                        id="outlined-username-input"
                        label="Username"
                        variant="outlined"
                        onChange={handleUsername}
                    />
                    <TextField
                        id="outlined-email-input"
                        label="E-mail"
                        variant="outlined"
                        onChange={handleEmail}
                        type="email"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        variant="outlined"
                        onChange={handlePassword}
                    />
                </InputsContainer>
            </form>

            <ButtonContainer>
                <Button onClick={signUp} variant="contained" color="primary" fullWidth>
                    Register
                </Button>
            </ButtonContainer>
        </Container>
    )
}

export default SignUpPage
