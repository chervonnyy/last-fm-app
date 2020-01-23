import { combineReducers } from 'redux';
import { CHANGE_USERNAME, CHANGE_HEADER, CHANGE_LOADING_STATUS } from './actions';
import friendsReducer from './Friends/reducers';

const defaultState = {
    username: null,
    header: '',
    isLoaded: false
}

const appReducer = (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_USERNAME: 
            return { ...defaultState ,username: action.payload }

        case CHANGE_HEADER:
                return { ...state, header: action.payload }

        case CHANGE_LOADING_STATUS: 
            return { ...state, isLoaded: action.payload }

        default:
            return state;
    }
}

export default combineReducers({
    app: appReducer,
    friends: friendsReducer
});