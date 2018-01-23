import React from 'react'
import ReactDom from 'react-dom'
import {connect} from 'react-redux'
import Weather from './weather.component'
import Movies from './movies.component'
import store from '../../store'

const mapStateToProps = store => {
    return {
    	isActive: store.dashboard.isActive,
        config: store.dashboard.config
    }
};

class DashboardInner extends React.Component {

	updateWeather(wdata, fdata) {
		store.dispatch({
			type: 'RENDER_WEATHER',
			response: {
				weather: wdata,
				forecast: fdata
			}
		});
	}

	render() {
		if (this.props.isActive) {
			return (
				<div className="placeholder">
					<Movies/>
					<Weather updateWeather={this.updateWeather}/>
					<div>placeholder component for images</div>
					<div>placeholder component for games</div>
					<div>placeholder component for youtube</div>
				</div>
			)
		} else {
			return null;
		}
	}
}

export default connect(mapStateToProps)(DashboardInner);
