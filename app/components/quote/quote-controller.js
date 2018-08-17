import QuoteService from "./quote-service.js";

let quoteService = new QuoteService

function drawQuote(quote) {
	// console.log(quote)
	document.getElementById('quote').innerHTML = `
	<p class="quote">${quote.quote}</p>
	<p class="quote">${quote.author}</p>
	`
}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		console.log('quotecontroller created')
		quoteService.getQuote(function (quote) {
			console.log('What is the quote', quote)
			quoteService.getQuote(drawQuote)
		})
	}
}