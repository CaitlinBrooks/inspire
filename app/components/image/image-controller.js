//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let imageService = new ImageService

function drawImage(image) {
  console.log(image)
  document.getElementById('body').style.backgroundImage = `url('${image.large_url}')`
}
// document.body.style.backgroundImage = "${image.imgUrl}">
// let template = '
//   <img src="${image.imgUrl}" alt="imageUrl">
//   `

//background repeat: https://www.w3schools.com/howto/howto_css_full_page.asp

export default class ImageController {
  constructor() {
    console.log('imagecontroller created')
    imageService.getImage(drawImage)
  }
}
