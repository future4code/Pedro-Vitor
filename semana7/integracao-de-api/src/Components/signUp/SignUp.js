import React from "react"
import styled from "styled-components"

const SignUpContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

export default class signUp extends React.Component{
    render(){
        return(
            <SignUpContainer>
                <div> Nome </div>
                <input
                    placeholder={"Nome do usuario"}
                    value={this.props.inputValue}
                    onChange={this.inputValue}/>
                <div> E-mail </div>
                <input
                    placeholder={"E-mail"}
                    value={this.props.inputValue}
                    />

                    <button type="submit"> Submit ! </button>
            </SignUpContainer>
        )
    }
}