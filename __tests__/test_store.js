import Dispatcher from '../app/dispatcher/Dispatcher';
import AppConstants from '../app/constant/Constants';
import forecastStore from '../app/store/forecastStore';

const {
	API_CONSTANT,
	EVENT_CONSTANT
} = AppConstants;


describe('Test forecastStore', () => {
	//mock actions inside dispatch payloads
	let payLoad = {
			type: API_CONSTANT.LOAD_DATA,
			data: []
	}

it('Store should listen for the actions', () => {
		// dispatch action ( store is listening for action )
		Dispatcher.dispatch(payLoad);
		let data = forecastStore.currentState();
		// assertions
		expect(data).toEqual([]);
	});
	
})