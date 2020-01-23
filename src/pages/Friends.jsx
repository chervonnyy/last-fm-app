import React from 'react';
import { connect } from 'react-redux';

import FriendList from '../components/FriendList/FriendList';
import Preloader from '../components/Preloader/Preloader';
import { loadFriendList } from '../store/Friends/actions';
import { setHeader } from '../store/actions';

const mapStateToProps = state => {
    return {
        friendList: state.friends.friendList,
        username: state.app.username,
        header: state.app.header
    }
}

const mapDispatchToProps = {
    loadFriendList,
    setHeader
}

function Friends(props) {

    const hasFriends = !!props.friendList.length;
    
    if (!hasFriends) {
        props.loadFriendList();
    } else {
        props.setHeader(`Here is a list of ${props.username}'s friends`);
    }

    return hasFriends ? <FriendList friends={props.friendList} /> : <Preloader />
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);