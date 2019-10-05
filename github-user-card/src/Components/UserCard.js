import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
max-width: 400px;
margin: 20px auto 20px;
text-align: center;
`

const Image = styled.img`
width: 100%;
max-width: 250px;
border: 2px solid black;
`

function UserCard(props){
    return (
        <StyledDiv>
                {props.user && (
                    <div>
                        <h1>{props.user.name}</h1>
                        <Image src={props.user.avatar_url} alt="avatar" />
                        <p>UserName: {props.user.login}</p>
                        <p>Location: {props.user.location}</p>
                         <p>Bio: {props.user.bio}</p>
                        <p>Followers: {props.user.followers}</p>
                        <p>Following: {props.user.following}</p>
                        {/* {props.children} */}
                    
                            </div>
                )}
        </StyledDiv>
    )
}

export default UserCard;