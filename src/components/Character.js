// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
    padding: 6px 10px;
    color: black;
    margin: 5px;
    border: green;
    
`
const StyledP = styled.p`
    color: orange;
`
const Character = props => {
    return (
        <StyledDiv className ="character">
            <p>{props.info.name}</p>
            <StyledP>{props.info.birth_year}</StyledP>
        </StyledDiv>
 )
}

export default Character;