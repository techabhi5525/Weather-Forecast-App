import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WeatherAppContainer from './WeatherAppContainer.jsx';

export default class Weather extends Component {

	constructor (props) {
		super (props);
	}

	render () {
		return (
			<div>
				<WeatherAppContainer/>
			</div>
		);
	}
}