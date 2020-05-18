import * as Carousel from "./addCarousel.js";
import { mockApi } from "./mock.js";

export const downloadedData = () => {
  // fetch("https://jsonplaceholder.typicode.com/albums/10/photos")
  mockApi()
    .then((resp) => JSON.parse(resp))
    .then((response) => {
      let productsList = response;
      Carousel.addCarousel(productsList);
    })
    .catch((err) => {
      console.log(err);
    });
};
