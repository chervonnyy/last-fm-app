import React from 'react';
import { connect } from 'react-redux';

import FriendList from '../components/FriendList/FriendList';
import Preloader from '../components/Preloader/Preloader';
import { loadFriendList } from '../store/Friends/actions';
import { setHeader } from '../store/actions';
import apiCall from '../assets/scripts/apiCall';

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
    
// /
    //     const userFriends = async () => await apiCall('User.getFriends', props.username);
    //     userFriends()
    //         .then(response => {
    //             if (!response.error) {
    //                 props.loadFriendList(response.friends.user);
    //                 props.setHeader(`Here is a list of ${props.username} friends`);
    //             }
    //         });
    // }

    const hasFriends = !!props.friendList.length;
    
    if (!hasFriends) {
        props.loadFriendList();
    }

    return hasFriends ? <FriendList friends={props.friendList} /> : <Preloader />
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);