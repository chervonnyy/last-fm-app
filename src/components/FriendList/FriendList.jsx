import React from 'react';
import UserCard from '../UserCard/UserCard';
import './FriendList.sass';

export default function FriendList(props) {
    return (
        <div className="friend-list">
            {props.friends.map((friend, index) => (
                <UserCard 
                    key={index} 
                    name={friend.name}
                    realname={friend.realname}
                    country={friend.country}
                    image={friend.image[1]['#text']}
                />
            ))}
        </div>
    );
};