export const UPDATE_FRIEND_LIST = 'UPDATE_FRIEND_LIST';
export const LOAD_FRIEND_LIST = 'LOAD_FRIEND_LIST';

export const updateFriendList = friendList => ({
    type: UPDATE_FRIEND_LIST,
    payload: friendList
});

export const loadFriendList = () => ({
    type: LOAD_FRIEND_LIST,
});
