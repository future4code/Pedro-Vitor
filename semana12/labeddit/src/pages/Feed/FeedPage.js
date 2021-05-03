import React, {useState} from "react"
import {useProtectedPage} from "../../hooks/useProtectedPage"
import FeedPostStyles from "./styled";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {ButtonContainer} from "../Login/styled";
import styled from "styled-components"
import {CssBaseline} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {BASE_URL} from "../../constants/urls";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const FeedPage = () => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    useProtectedPage()

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleText = (event) => {
        setText(event.target.value)
    }

    const createPost = async () => {
        const body = {
            text: text,
            title: title
        }

        await axios
            .post(`${BASE_URL}/posts`, body, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then(response => {
                alert("Post criado com sucesso!")
            })
    }

    return (
        <div>
            <React.Fragment>
                <CssBaseline/>
                <Container fixed>
                    <Typography component="div" style={{backgroundColor: 'white'}}>
                        <TextField
                            id="standard-basic"
                            label="Titulo do Post"
                            type="text"
                            variant="outlined"
                            onChange={handleTitle}
                        />
                        <TextField
                            label="Escreva seu post"
                            type="text"
                            variant="outlined"
                            onChange={handleText}
                        />
                        <ButtonContainer>
                            <Button variant="contained" color="primary" fullWidth onClick={createPost}>
                                Postar !
                            </Button>
                        </ButtonContainer>
                    </Typography>
                </Container>
            </React.Fragment>
            <br/>
            {FeedPostStyles()}
        </div>
    )
}

export default FeedPage