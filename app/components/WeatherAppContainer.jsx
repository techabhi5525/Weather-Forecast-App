import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Constants from '../constant/Constants';
import {fetchWeatherForecastData} from '../actions/WeatherForecastActions';
import forecastStore from '../store/forecastStore';
import {formatWeatherReport} from '../utils/formatWeather.js';
import ForecastDayWise from './ForecastDayWise.jsx';
import DayDetailedView from './DayDetailedView.jsx';
import '../stylesheets/weather-app.css';

const {
	ACTIONS_CONSTANT,
	API_CONSTANT,
	EVENT_CONSTANT
} = Constants;

export default class WeatherAppContainer extends Component {

	constructor (props) {
		super (props);
		this.state = {
			weather: null,
			isDetailedView: false,
			selectedIndex: null
		}
	}
	
	componentDidMount() {
		fetchWeatherForecastData();
		forecastStore.addChangeListner(EVENT_CONSTANT.DATA_LOADED, this.updateWeather);
	}

	componentWillUnMount() {
		forecastStore.removeChangeListner(EVENT_CONSTANT.DATA_LOADED, this.updateWeather);
	}

	updateWeather = (data) => {
		let weather = formatWeatherReport(data);
		this.setState({ weather: weather });
	}

	enableDetailedView = (id) => {
		this.setState({
			isDetailedView: true,
			selectedIndex: id
		})
	}

	handleCloseDialog = () => {
		this.setState({
			isDetailedView: false,
			selectedIndex: null
		})
	}

	render () {
		const todayDate = new Date().toDateString();
		
		return (
			<div>
				<div className="appHeader">Pune Weather Forecast</div>
				<div className="appDate">{todayDate}</div>
				<div>
				<ForecastDayWise weather={this.state.weather} enableDetailedView={this.enableDetailedView}/>
				{this.state.isDetailedView && 
					<DayDetailedView weather={this.state.weather} selectedIndex={this.state.selectedIndex} handleCloseDialog={this.handleCloseDialog}/>}
				</div>
			</div>
		);
	}
}