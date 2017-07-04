'use strict';

import {combineReducers} from 'redux'

const main = (state = {}, action) => {
	let stateCopy = {...state};

	switch(action.type) {
		case 'OPEN_DASHBOARD': 
			return {
				...stateCopy,
				dashboard: action.dashboard
			}
		case 'OPEN_FILES': 
			return {
				...stateCopy,
				files: action.files
			}
		case 'OPEN_PROFILE': 
			return {
				...stateCopy,
				profile: action.profile
			}
		case 'OPEN_SETTINGS': 
			return {
				...stateCopy,
				settings: action.settings
			}

		default: 
			return state
	}
}

export default main;