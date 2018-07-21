import React from 'react';
import { shallow, mount } from 'enzyme';

import ForecastDayWise from '../app/components/ForecastDayWise.jsx';
// test branch for git git pull request
describe('Test ForecastDayWise Component layout', () => {

	const sample_props = [
		{forecastingDate: '27-06-2017', 
		 data: [
		 	{
		 		main: {
		 			rnd_level: 923.27,
					humidity:74,
					pressure:923.27,
					sea_level:1018.71,
					temp:300.71,
					temp_kf:2.76,
					temp_max:300.71,
					temp_min:297.947
		 		},
		 		weather: [
		 			{
		 				description: "light rain",
		 				icon: "10d",
		 				id: 500,
		 				main:"Rain"
		 			}
		 		]
		 	}
		 ]
		}
	];

	it('Should have expeted class associated with it', () => {
		const container = shallow(<ForecastDayWise/>);
		expect(container).toBeDefined();
		expect(container.hasClass('forecastingLayout')).toEqual(true);
	});

	it('Should not render card view when the props are not defined', () => {
		const container = shallow(<ForecastDayWise/>);
		// Props should be same as the mock props passed into the component
		expect(container.props().weather).not.toBeDefined();
		// When the props are not defined, card view should not be rendered on page
		expect(container.hasClass('dayWiseTemp')).toEqual(false);
		// When props are not defined, card , card title shoud not be rendered on the page
		expect(container.find('Card').length).toBe(0);
		expect(container.find('CardTitle').length).toBe(0);
		expect(container.find('h4').text()).toEqual('Loading ..');
	});

	it('Should render card view when the compoent receives props', () => {
		const container = mount(<ForecastDayWise weather={sample_props}/>);
		expect(container.props().weather).toBeDefined();
		expect(container.find('Card').length).toBe(1);
		expect(container.find('CardTitle').length).toBe(1);
		expect(container.find('CardText').length).toBe(1);
	});

	it ('Should invoke call back function once we click on the card', () => {
		let enableDetailedView = jest.fn();
		const container = mount(<ForecastDayWise weather={sample_props} enableDetailedView={enableDetailedView}/>);
		container.find('Card').simulate('click');
		expect(enableDetailedView).toBeCalled();
	});
});


