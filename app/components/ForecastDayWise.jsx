import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import '../stylesheets/weather-app.css';

export default class ForecastDayWise extends Component {

	static PropTypes = {
		weather: PropTypes.array,
		enableDetailedView: PropTypes.func.isRequired
	};

	constructor (props) {
		super (props);
	}

	getDate = (date) => {
		const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return weekdays[new Date(date).getDay()];
	}

	renderData = (data) => {		
		let contents = data.map((weather, index) => {
			const date = weather.forecastingDate;
			const forecastingData = weather.data[0];
			if (forecastingData) { // Process only if data is present
				const temp = (forecastingData.main.temp - 273.15).toFixed(2); // converting temp to degree celsius 
				const temp_max = ((forecastingData.main.temp_max- 32)*5/9).toFixed(2);
				const temp_min = ((forecastingData.main.temp_min - 32)*5/9).toFixed(2);
				return (
					<div className="dayWiseTemp" key={index}>
						<Card shadow={0} className="dayDetails" onClick={() => {this.props.enableDetailedView(index)}}>
							<CardTitle className="tempHeader"><b>{temp} °C</b></CardTitle>
							<CardActions border></CardActions>
							<CardText>
								<div>
									<span className="details"><b>Date : </b>{this.getDate(date)}, {date}</span>
								    <span className="details"><b>Max. Temp : </b>{temp_max}</span>
								    <span className="details"><b>Min. Temp : </b>{temp_min}</span>
									<span className="details"><b>Daye Forecast : </b>{forecastingData.weather[0].description}</span>
									<span className="details"><b>Humidity : </b>{forecastingData.main.humidity}</span>
								</div>
		    				</CardText>
						</Card>
					</div>
				);
			}
		});
		return contents;
	}
	render () {
		return (
				<div className="forecastingLayout">
					{this.props.weather ? 
						this.renderData(this.props.weather) : 
						<h4>Loading ..</h4>
					}
				</div>
		);
	}
}