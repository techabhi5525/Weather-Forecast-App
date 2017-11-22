import AppDispatcher from '../dispatcher/Dispatcher';
import * as WeatherForecastService from '../http/WeatherForecastService';
import Constants from '../constant/Constants';

const {
	ACTIONS_CONSTANT,
	API_CONSTANT
} = Constants;

export function fetchWeatherForecastData () {
	WeatherForecastService.fetchWeatherForecastData();
}

export function weatherLoaded (data) {
	AppDispatcher.dispatch({
		type: API_CONSTANT.LOAD_DATA,
		data: data
	});
}