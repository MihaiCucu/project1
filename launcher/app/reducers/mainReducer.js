'use strict';

import {combineReducers} from 'redux'
import dashInnerReducer from './dashInnerReducer'
import weatherReducer from './weatherReducer'
import moviesReducer from './moviesReducer'

const filesReducer = (state = {}, action) => {
	let stateCopy = {...state};

	switch(action.type) {
		case 'OPEN_FILES':
			return {
				...stateCopy,
				files: action.files
			}
		default:
			return state
	}
}

const profileReducer = (state = {}, action) => {
	let stateCopy = {...state};

	switch(action.type) {
		case 'OPEN_PROFILE':
			return {
				...stateCopy,
				profile: action.profile
			}
		default:
			return state
	}
}

const settingsReducer = (state = {}, action) => {
	let stateCopy = {...state};

	switch(action.type) {
		case 'OPEN_SETTINGS':
			return {
				...stateCopy,
				settings: action.settings
			}
		default:
			return state
	}
}

const dashReducer = (state = {}, action) => {
	let stateCopy = Object.assign({}, state);

	switch(action.type) {
		case 'OPEN_DASHBOARD':
			return {
				...stateCopy,
				isActive: action.dashboard.isActive,
				config: action.dashboard.config
			}

		default:
			return state
	}
}

const allReducers = combineReducers({
	dashboard: dashReducer,
	files: filesReducer,
	profile: profileReducer,
	settings: settingsReducer,
	dashInner: dashInnerReducer,
	weather: weatherReducer,
	movies: moviesReducer
});

export default allReducers;