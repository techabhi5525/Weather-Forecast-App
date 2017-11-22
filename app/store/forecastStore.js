import dispatcher from '../dispatcher/Dispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import { createStore } from './Store';
import Constants from '../constant/Constants';

const {
	API_CONSTANT,
	EVENT_CONSTANT
} = Constants;
let _weatherForecastData = null;
const forecastStore = createStore ({
	currentState () {
		return _weatherForecastData;
	}
});

function updateWeather (data) {
	_weatherForecastData = data;
}
forecastStore.dispatchToken = dispatcher.register (action => {

	switch (action.type) {
		case API_CONSTANT.LOAD_DATA:
			updateWeather(action.data);
			forecastStore.emitChange(EVENT_CONSTANT.DATA_LOADED, action.data);
			break;
	}
});
export default forecastStore;