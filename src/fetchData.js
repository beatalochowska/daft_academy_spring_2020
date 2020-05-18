import { addCarousel } from "./addCarousel.js";
import { addNewArrivals } from "./addNewArrivals";
import { loadProductsOnClick } from "./loadProductsOnClick";

export const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/albums/10/photos")
    .then((resp) => resp.json())
    .then((response) => {
      let productsList = response;
      addCarousel(productsList);
      loadProductsOnClick(productsList);
      addNewArrivals(productsList);
    })
    .catch((err) => {
      addCarousel(err);
      loadProductsOnClick(err);
      addNewArrivals(err);
    });
};
