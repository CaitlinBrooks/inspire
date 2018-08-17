import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawWeather(weather) {
	let tempFar = (weather.main.temp * 9 / 5) - 459.67
	document.getElementById('weather').innerHTML = `
		<p class="weather">${tempFar.toFixed(0)}</p>
		<p>Boise, ID</p>
		`
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			drawWeather(weather)
			//What can you do with this weather object?
		})
		//drawWeather -- to screen
	}
}
