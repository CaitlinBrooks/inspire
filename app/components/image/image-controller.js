//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

function getImages(images) {
  let template = ''
  for (let i = 0; i < images.length; i++) {
    let image = images[i];
    template += `
    <div class="image">
    <p>${image.name}</p>
    <img src="${image.imgUrl}" alt="imageUrl">
    </div>
    `
  }
  //maybe write body instead of images to target?
  document.getElementById('images').innerHTML = template
}


export default class ImageController {
}
