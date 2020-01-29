import React from 'react';
import { connect } from 'react-redux';

import FriendList from '../components/FriendList/FriendList';
import Preloader from '../components/Preloader/Preloader';
import { loadFriendList } from '../store/Friends/actions';
import { setHeader } from '../store/actions';

const mapStateToProps = state => {
    return {
        username: state.app.username,
        header: state.app.header,
        friendList: state.friends.friendList
    }
}

const mapDispatchToProps = {
    setHeader,
    loadFriendList
}

function Friends(props) {

    const hasFriends = !!props.friendList.length;
    
    if (hasFriends) {
        props.setHeader(`Here is a list of ${props.username}'s friends`);
    } else {
        props.loadFriendList();
    }

    return hasFriends ? <FriendList friends={props.friendList} /> : <Preloader />
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);