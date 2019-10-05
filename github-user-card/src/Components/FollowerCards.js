import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
max-width: 50px;
max-height: 50px;
`
const Div = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
`


function FollowerCards(props) {
    return (
        <div>
            <Div onClick={props.onClick}>
                <Image src={props.follower.avatar_url} alt="avatar" />
                {props.follower.login}

            </Div>
        </div>
    )
}

export default FollowerCards;