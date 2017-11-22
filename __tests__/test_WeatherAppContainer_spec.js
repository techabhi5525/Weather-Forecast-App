import React from 'react';
import { shallow, mount } from 'enzyme';

import WeatherAppContainer from '../app/components/WeatherAppContainer.jsx';
import ForecastDayWise from '../app/components/ForecastDayWise.jsx';

describe('Test WeatherAppContainer Component', () => {
	
	it('WeatherAppContainer should have expected class associated', () => {
		const container = shallow(<WeatherAppContainer/>);
		expect(container).toBeDefined();
	});

	it('It should contain the location & date information', () => {
		const container = mount(<WeatherAppContainer/>);
		const list = container.find('div');
		expect(list.length).toEqual(5);
	});

	it('Component should invoke the function to fetch data', () => {
		let onWillMount = jest.fn();
		WeatherAppContainer.prototype.componentWillMount = onWillMount;
		const container = mount(<WeatherAppContainer/>);
		expect(onWillMount).toBeCalled();
	})

})