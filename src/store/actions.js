export const CHANGE_USERNAME = 'CHANGE_USERNAME';
export const CHANGE_LOADING_STATUS = 'CHANGE_LOADING_STATUS';

export const setUsername = username => ({
    type: CHANGE_USERNAME,
    payload: username
});

export const setLoadingStatus = loading => ({
    type: CHANGE_LOADING_STATUS,
    payload: loading
});
