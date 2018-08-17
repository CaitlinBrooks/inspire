import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawWeather(weather) {
	let tempFaran = (weather.data.main.temp * 9 / 5) - 459.67
		< div >
		document.getElementById('weather').innerHTML = '
			< p > math.round(tempFaren)
} &#176</p >
	<p> Boise</p >
		</div >
	'
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
