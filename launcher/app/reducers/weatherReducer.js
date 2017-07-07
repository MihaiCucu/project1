const weatherReducer = (state = {}, action) => {
	let stateCopy = {...state};

	switch (action.type) {
		case 'RENDER_WEATHER':
			return {
				...stateCopy,
				weatherResponse: action.response.weather,
				forecastResponse: action.response.forecast
			}
		default:
			return state
	}
};

export default weatherReducer;
