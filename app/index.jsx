import React, {Component} from 'react';
import {render} from 'react-dom'; 
import Weather from './components/Weather.jsx';

import 'react-mdl/extra/material.js';
import 'react-mdl/extra/material.css';

export default class App extends Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div>
				<Weather/>
			</div>
		);
	}
}
render(<App/>, document.getElementById('app'));