import React, {useState} from "react"
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles'
import {useForm} from "react-hook-form"
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom"
import {
    Container,
    InputsContainer,
    ButtonContainer
} from "./styled"
import axios from "axios";
import {BASE_URL} from "../../constants/urls";

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

const LoginPage = () => {
    const classes = useStyles();
    const {register, handleSubmit} = useForm()
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
                window.localStorage.setItem("token", response.data.token)
                history.push("/feed")
            })
            .catch(error => {
                console.log(error)
                alert("Erro ao logar, verifique seus dados.")
            })
    }

    const registerUser = () => {
        history.push("/register")
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Container>
                <InputsContainer onSubmit={handleSubmit()}>
                    <TextField
                        id="outlined-email-input"
                        label="E-mail"
                        type="email"
                        variant="outlined"
                        {...register("email",
                            {required: true})}
                        onChange={handleEmail}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        variant="outlined"
                        {...register("password",
                            {required: true})}
                        onChange={handlePassword}
                    />
                </InputsContainer>

                <ButtonContainer>
                    <Button onClick={login} variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                    <Button onClick={registerUser} variant="contained" color="primary" fullWidth>
                        Register
                    </Button>
                </ButtonContainer>
            </Container>
        </form>
    )
}

export default LoginPage

/*
email: labenu@labenu
password: labenu
username: labenu1
 */