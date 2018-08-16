//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let imageService = new ImageService

function drawImage(image) {
  console.log(image)
  // let template = ''
  // // for (let i = 0; i < images.length; i++) {
  // //   let image = images[i];
  // template += `
  //   <div class="image">
  //   <img src="${image.imgUrl}" alt="imageUrl">
  //   </div>
  //   `
}
//maybe write body instead of images to target?

// document.getElementById('body').innerHTML = template


export default class ImageController {
}
