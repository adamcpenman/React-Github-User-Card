import React from 'react';
import styled from 'styled-components';

const Details = styled.details`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

function FollowerList(props) {
    return (
        <Details>
            <summary>Friends</summary>
            {props.children}
        </Details>
    )
}

export default FollowerList;