import { combineReducers } from 'redux';
import { CHANGE_USERNAME, CHANGE_LOADING_STATUS } from './actions';

const defaultState = {
    username: null,
    isLoaded: false
}

const appReducer = (state = defaultState, action) => {
    console.log(state);
    switch(action.type) {
        case CHANGE_USERNAME: 
            return { ...state, username: action.payload }

        case CHANGE_LOADING_STATUS: 
            return { ...state, isLoaded: action.payload }
    }
    return state;
}

export default combineReducers({
    app: appReducer
});
