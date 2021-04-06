import React from "react"
import axios from "axios"
import styled from "styled-components"

const AppContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`
export default class App extends React.Component {

    render(){
        return (
            <AppContainer>
                <h3> Testando essa desgraça </h3>
            </AppContainer>
            )
    }
}