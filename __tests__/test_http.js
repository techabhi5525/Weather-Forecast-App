jest.mock('../app/actions/WeatherForecastActions');
jest.mock('../__mocks__/Request');
// jest.mock('../app/http/RequestWebUtils');
jest.unmock('../app/http/WeatherForecastService');

import * as WeatherForecastActions from '../app/actions/WeatherForecastActions';
import {fetchWeatherForecastData} from '../app/http/WeatherForecastService';
import AppConstants from '../app/constant/Constants';
import Request from '../__mocks__/Request';

describe('Test forecast API', () => {
	it('Should dispatch an action once it complete the API call', () => {
		return fetchWeatherForecastData().then(() => {
			expect(WeatherForecastActions.weatherLoaded).toBeCalled();
		})
	})
})