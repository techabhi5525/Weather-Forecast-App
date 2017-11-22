jest.unmock('../app/actions/WeatherForecastActions');
jest.mock('../app/dispatcher/Dispatcher');
jest.mock('../app/http/WeatherForecastService');

import * as WeatherForecastActions from '../app/actions/WeatherForecastActions';
import AppConstants from '../app/constant/Constants';
import Dispatcher from '../app/dispatcher/Dispatcher';
import * as WeatherForecastAPI from '../app/http/WeatherForecastService';

const {
	ACTIONS_CONSTANT,
	API_CONSTANT
} = AppConstants;

describe('Test actions - weatherLoaded()', () => {
	it ('should call the dispatcher', () => {
		const weather = [];
		WeatherForecastActions.weatherLoaded(weather);
		expect(Dispatcher.dispatch.mock.calls.length).toBe(1);
	});

	it ('calls the dispatcher with correct payload', () => {
		WeatherForecastActions.weatherLoaded('weather');
		
		// Taking argument information from the mock after invoking the function
		const args = Dispatcher.dispatch.mock.calls[1];
		const [ action ] = args;
		
		// Making sure that the correct information was passed to the dispatcher
		expect(action).toBeDefined();
		expect(action.type).toBe(API_CONSTANT.LOAD_DATA);
		expect(action.data).toBe('weather');
	});

});

describe('Test actions - fetchWeatherForecastData()', () => {
	it ('should invoke an API call to fetch data', () => {
		WeatherForecastActions.fetchWeatherForecastData();
		expect(WeatherForecastAPI.fetchWeatherForecastData).toBeCalled();
	})
})