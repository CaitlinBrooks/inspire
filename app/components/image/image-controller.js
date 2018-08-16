//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

function drawImages(images) {
  let template = ''
  for (let i = 0; i < images.length; i++) {
    let image = images[i];
    template += `
    <div onclick='app.controllers.gameController.setDragon(${image.id})' class="dragon">
    <h4>${image.name}</h4>
    <img src="${image.imgUrl}" alt="">
    </div>
    `
  }
  //maybe write body instead of images to target?
  document.getElementById('images').innerHTML = template
}


export default class ImageController {
}
