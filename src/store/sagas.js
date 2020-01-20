import { takeEvery, put, select } from 'redux-saga/effects';
import { LOAD_FRIEND_LIST, updateFriendList } from './Friends/actions';

function fetchData(method, user) {
    const base = 'https://ws.audioscrobbler.com/2.0/';
    const apiKey = '7600702bed449a1234d7fe6d22c880a2';
    const query = user ? `method=${method}&user=${user}` : `method=${method}`;
    return fetch(`${base}?${query}&api_key=${apiKey}&format=json`)
        .then(response => response.json())
}

function* workerLoadFriendList() {
    const getUsername = state => state.app.username
    const username = yield select(getUsername); 
    const response = yield fetchData('User.getFriends', username);
    const friendList = response.friends.user;
    yield put(updateFriendList(friendList));
}

export function* watchLoadFriendList() {
    yield takeEvery(LOAD_FRIEND_LIST, workerLoadFriendList);
}