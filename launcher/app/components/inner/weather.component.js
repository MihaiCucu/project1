import React from 'react';
import ReactDom from 'react-dom'
import {connect} from 'react-redux'
import api from '../../util/api'

const mapStateToProps = store => {
	// console.log(store);
	return {
		weatherResp: store.weather.weatherResponse,
		forecastResp: store.weather.forecastResponse
	}
}

class Weather extends React.Component {

	componentDidMount() {
		let requestWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Bucharest,ro&units=metric&APPID=47ec9f2b47ae2e4fff9ef399d651100d',
			requestForecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=Bucharest,ro&units=metric&APPID=47ec9f2b47ae2e4fff9ef399d651100d',
			weatherRequestFinished = false,
			forecastRequestFinished = false,
			weatherData,
			forecastData;

		api.send({
			endpoint: requestWeatherUrl,
			method: 'GET',
			callback: {
				success: (resp) => {
					weatherData = JSON.parse(resp);
					weatherRequestFinished = true;
					if (weatherRequestFinished && forecastRequestFinished) {
						this.props.updateWeather(weatherData, forecastData);
					}
				},
				error: (err) => {
					console.log(err);
				}
			}
		});

		api.send({
			endpoint: requestForecastUrl,
			method: 'GET',
			callback: {
				success: (resp) => {
					forecastData = JSON.parse(resp);
					forecastRequestFinished = true;

					if (weatherRequestFinished && forecastRequestFinished) {
						this.props.updateWeather(weatherData, forecastData);
					}
				},
				error: (err) => {
					console.log(err);
				}
			}
		});
	}

	render () {
		if (this.props.weatherResp && this.props.forecastResp) {
			return (
				<div className="weather-widget">
					<div className="current-weather">
						<h3>
							<span className="text">
								Currently
								<strong>{this.props.weatherResp.name}</strong>
							</span>
							<span className="icon">
								<img src={'http://openweathermap.org/img/w/' + this.props.weatherResp.weather[0].icon + '.png'} />
							</span>
						</h3>
						<p>
							<span className="value">{this.props.weatherResp.main.temp}</span>
							<sup>&deg;C</sup>
						</p>
					</div>
				</div>
			)
		} else {
			return null;
		}
	}
}

export default connect(mapStateToProps)(Weather);
