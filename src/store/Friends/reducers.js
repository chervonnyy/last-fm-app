import { UPDATE_FRIEND_LIST } from './actions';

const defaultState = {
    friendList: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case UPDATE_FRIEND_LIST:
            return { ...state, friendList: action.payload }
    }
    return state;
}