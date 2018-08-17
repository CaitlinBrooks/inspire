//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let imageService = new ImageService

function drawImage(image) {
  console.log(drawImage)
  document.getElementById('body').style.backgroundImage = `url(${`largeUrl`})`
}
// document.body.style.backgroundImage = "${image.imgUrl}">
// let template = '
//   <img src="${image.imgUrl}" alt="imageUrl">
//   `

//maybe target body instead of images?



export default class ImageController {
  constructor() {

  }
}
