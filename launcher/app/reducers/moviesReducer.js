const {ipcRenderer} = window.require('electron');
import store from '../store';

const moviesReducer = (state = {}, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case 'GET_MOVIES':
            ipcRenderer.send('get-movies');

            ipcRenderer.on('got-movies', (evt, arg) => {
                store.dispatch({type: 'GOT_MOVIES', response: arg});
            });
        case 'SET_MOVIES_URL':
            ipcRenderer.send('set-movies-url');
            return {
                ...stateCopy,
                moviesURL: action.response
            };
        case 'GOT_MOVIES':
            return {
                ...stateCopy,
                files: action.response
            };
        default:
            return state
    }
};

export default moviesReducer;
