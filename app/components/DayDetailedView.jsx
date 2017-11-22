import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, Spinner } from 'react-mdl';

export default class DayDetailedView extends Component {

	getWeekDay = (date) => {
		const weekdays = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return weekdays[new Date(date).getDay()];
	}

	extractContents = (weather) => {
		let contents = weather.map((data, index) => {
			const date = new Date(data.dt_txt);
			const time = date.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
			const maxTemp = ((data.main.temp_max-32)*5/9).toFixed(2);
			const minTemp = ((data.main.temp_min-32)*5/9).toFixed(2);
			return (
				<div className="fullDayDetails" key={index}>
					<p><b>{time}</b></p>
					<p><b>Min : </b>{minTemp} °C</p>
					<p><b>Max : </b>{maxTemp} °C</p>
				</div>
			);
		});
		return contents;
	}

	render () {
		const {
			weather,
			selectedIndex,
		} = this.props;

		const selected = weather[selectedIndex];
		const weekDay = this.getWeekDay(selected.forecastingDate);

		return (
			<Dialog open={true} style={{display: 'block', zIndex: '10', top: '90px', width: '70%'}}>
				<div className="dayHeader">
					<h4 className="city">Pune</h4>
					<h5 className="fullDate">{weekDay}, {selected.forecastingDate}</h5>   
				</div>

      <DialogContent>
      	<div className="content">
      		{this.extractContents(selected.data)}
      	</div>
      </DialogContent>

			<DialogActions>
        <Button type='button' onClick={this.props.handleCloseDialog}>Close</Button>
      </DialogActions>
			</Dialog>
		);
	}
}