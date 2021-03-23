import React from "react"
import styled from "styled-components"

const ListContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`
export default class UserList extends React.Component {

    render(){
        return(
            <ListContainer>
                <li> teste 1 </li>
                <li> teste 2 </li>
                <li> teste 3 </li>
            </ListContainer>
        )
    }
}