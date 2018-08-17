import QuoteService from "./quote-service.js";

let quoteService = new QuoteService

function drawQuote(quote) {
	console.log(quote)
	document.getElementById('').innerHTML = `url('${quote.quote}')`
	document.getElementById('').innerHTML = `url('${quote.author}')`
}

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
