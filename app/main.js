import WeatherController from "./components/weather/weather-controller.js";
import ImageController from "./components/image/image-controller.js";
import QuoteController from "./components/quote/quote-controller.js";

class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      imageController: new ImageController(),
      quoteController: new QuoteController(),
      // todoController: new todoController()
    }
  }
}

// @ts-ignore
window.app = new app()  