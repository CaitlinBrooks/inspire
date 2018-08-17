import WeatherController from "./components/weather/weather-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      imageController: new ImageController()
      // quoteController: new QuoteController()
      // todoController: new todoController()
    }
  }
}

// @ts-ignore
window.app = new app()  