import "./styles/style.scss";
import { addProducts } from "./addProducts.js";

export const addCarousel = (list) => {
  const carouselProductsActive = document.getElementById(
    "carouselProductsActive"
  );
  const carouselSpinner = document.getElementById("carouselSpinner");
  carouselProductsActive.removeChild(carouselSpinner);
  carouselProductsActive.appendChild(addProducts(list, 0));
  carouselProductsActive.appendChild(addProducts(list, 1));
  carouselProductsActive.appendChild(addProducts(list, 2));

  const carouselProducts = document.getElementById("carouselProducts");

  carouselProducts.appendChild(addProducts(list, 3));
  carouselProducts.appendChild(addProducts(list, 4));
  carouselProducts.appendChild(addProducts(list, 5));
};
