import Request from './RequestWebUtils';
import * as WeatherForecastActionCreator from '../actions/WeatherForecastActions';

const weather_api = "http://api.openweathermap.org/data/2.5/forecast";
const location = "Pune";
const api_key = "APPID=8d2c9bed1896e0ac238259ea93d2a5ce";
var geocoder;
var currentLoc;

export function fetchWeatherForecastData () {
	
	//  results[0].address_components[4].short_name+","+results[0].address_components[6].short_name
	// const cityLoc = getCurrentCityLocation();
	const city = location;
	const url = '${weather_api}?q=${city}&${api_key}';

	return Request.get(url)
		.then((body, res) => {
			WeatherForecastActionCreator.weatherLoaded(body);
		});
}
// function  getCurrentCityLocation(){
//     if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
// } 
// }

// //Get the latitude and the longitude;
// function successFunction(position) {
//     var lat = position.coords.latitude;
//     var lng = position.coords.longitude;
//     codeLatLng(lat, lng)
// }

// function errorFunction(){
//     console.log("Geocoder failed");
// }
// function codeLatLng(lat, lng) {
//     geocoder = new google.maps.Geocoder();
//     var latlng = new google.maps.LatLng(lat, lng);
//     geocoder.geocode({'latLng': latlng}, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//       currentLoc=results[0].address_components[4].short_name+","+results[0].address_components[6].short_name;
//         return currentLoc;
//       } else {
//         console.log("Geocoder failed due to: " + status);
//       }
//     });
//   }