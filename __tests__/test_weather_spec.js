import React from 'react';
import { shallow, mount } from 'enzyme';

import Weather from '../app/components/Weather.jsx';
import WeatherAppContainer from '../app/components/WeatherAppContainer.jsx';

describe('Test Weather Component', () => {
	
	it('It should render the child components', () => {
		const wrapper = mount(<Weather/>);
		expect(wrapper.contains(<Weather/>)).toEqual(true);
	});

})