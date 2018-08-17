import QuoteService from "./quote-service.js";

let quoteService = new QuoteService


export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		quoteService.getQuote(function (quote) {
			console.log('What is the quote', quote)
		})
	}
}
