const dashReducer = (state = {}, action) => {
	let stateCopy = {...state};

	switch (action.type) {
		case 'DASHBOARD_LOADED':
			return {
				...stateCopy,
				dashboard: {
					config: action.dashboard.config
				}
			}
		default:
			return state
	}
};

export default dashReducer;
