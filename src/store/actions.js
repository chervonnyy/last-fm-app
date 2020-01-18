const CHANGE_USERNAME = 'CHANGE_USERNAME';
const CHANGE_LOADING_STATUS = 'CHANGE_LOADING_STATUS';

const setUsername = username => ({
    type: CHANGE_USERNAME,
    payload: username
});

const setLoadingStatus = loadingStatus => ({
    type: CHANGE_LOADING_STATUS,
    payload: loadingStatus
});

export { CHANGE_USERNAME, CHANGE_LOADING_STATUS, setUsername, setLoadingStatus}