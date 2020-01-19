import React from 'react';

import './FriendList.sass';

export default function FriendList(props) {

    console.log(props)

    return (
        <ul>
            {props.friends.map(friend => <li>{friend.name}</li>)}
        </ul>
    );
};