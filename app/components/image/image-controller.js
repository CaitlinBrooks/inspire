//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let imageService = new ImageService

function drawImage(image) {
  console.log(image)
  // let template = '
  //   <div class="image">
  //   <img src="${image.imgUrl}" alt="imageUrl">
  //   </div>
  //   `
}
//maybe target body instead of images?

// document.getElementById('body').innerHTML = template


export default class ImageController {
}
