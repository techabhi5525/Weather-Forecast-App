// function to format weather report
function formatWeatherReport (weather) {
	const currentDate = weather.list[0].dt_txt && weather.list[0].dt_txt.split(" ")[0]; // Extracting YYYY-mm-dd from the date time string
	const dateList = getForecastingDates(currentDate);
	const data = getForecastingContents(weather, dateList);
	return data;
}

function getForecastingDates (currentDate) {
	let dates = []; // Array to keep the forecasting dates
	dates.push(currentDate);
	let today = new Date(currentDate);

	for (let i = 1; i <= 6; i++ ) {
		let nextDay = new Date();
		nextDay.setDate(today.getDate() + i);
		dates.push(getFormattedDate(nextDay));
	}

	return dates;
}

function getFormattedDate (dateTime) {
		let date, day, month, year;
		date = new Date(dateTime);
		month = '' + ( date.getMonth() + 1 );
		day = '' + date.getDate();
		year = date.getFullYear();

		if ( month.length < 2 ) {
			month = '0' + month;
		}

		if ( day.length < 2 ) {
			day = '0' + day;
		}

	return [year, month, day].join('-');
}

function getForecastingContents (weatherData, dateList) {
	let forecastingContent = [];
	dateList.forEach((date, index) => {
		// Structure of the returning obj should be {forecastingDate: 'YYYY-mm-dd', data: [...]}
		let obj = {};
		let values = [];
		obj.forecastingDate = date;

		weatherData.list.forEach((weather) => {
			let weatherDt = weather.dt_txt && weather.dt_txt.split(" ")[0]; // Extracting the date part from the received weather data
			weatherDt === date && values.push(weather);
		})

		obj.data = values;
		forecastingContent.push(obj);
	});
	if(forecastingContent[6].data.length==0){
		forecastingContent[6].data=forecastingContent[0].data;
	}
	
	return forecastingContent;
}

export {
	formatWeatherReport,
	getFormattedDate
}
