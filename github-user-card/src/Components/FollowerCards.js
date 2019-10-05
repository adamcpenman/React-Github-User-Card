import React from 'react';

function FollowerCards(props) {
    return (
        <div>
            <div onClick={props.onClick}>
                <img src={props.follower.avatar_url} alt="avatar" />
                {props.follower.login}

            </div>
        </div>
    )
}

export default FollowerCards;