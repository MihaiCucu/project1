'use strict';

import {createStore} from 'redux'

// Import the reducers
import mainReducer from './reducers/mainReducer'

// The Redux Store
let initialState = {
    dashboard: {
    	isActive: false
    },
    files: {
    	isActive: false
    },
    profile: {
    	isActive: false
    },
    settings: {
    	isActive: false
    }
};

const store = createStore(mainReducer, initialState);

export default store;