const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/random/'
const apiUrl = url + encodeURIComponent(url2);

// @ts-ignore
const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 5000
});

export default class ImageService {
	constructor() {

	}

	getImage(callWhenDone) {
		//ask about this
		// ^^^^^^^ How do you call this function?
		console.log("Looking for a good pic")
		imgApi.get().then(res => {
			console.log('Image Data:', res.data)
			callWhenDone(res.data)
		})
	}
}
