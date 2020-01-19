import React from 'react';
import { connect } from 'react-redux';

import FriendList from '../components/FriendList/FriendList';
import Preloader from '../components/Preloader/Preloader';

import { updateFriendList } from '../store/Friends/actions';
import { setUsername } from '../store/actions';

import apiCall from '../assets/scripts/apiCall';

const mapStateToProps = state => {
    return {
        username: state.app.username,
        friendList: state.friends.friendList
    }
}

const mapDispatchToProps = {
    updateFriendList,
    setUsername
}

function Friends(props) {

    function getFriends() {
        const userFriends = async () => await apiCall('User.getFriends', props.username);
        userFriends().then(response => {
            props.updateFriendList(response.friends.user);
        });
    }

    const hasFriends = !!props.friendList.length;
    
    if (!hasFriends) {
        getFriends()
    }

    return hasFriends ? <FriendList friends={props.friendList} /> : <Preloader />
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);