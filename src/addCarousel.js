import "./styles/style.scss";
import { addProducts } from "./addProducts.js";
import { fetchFailure } from "./fetchFailure";

export const addCarousel = (list) => {
  const carouselProductsActive = document.getElementById(
    "carouselProductsActive"
  );
  const carouselSpinner = document.getElementById("carouselSpinner");
  const carouselProducts = document.getElementById("carouselProducts");

  carouselProductsActive.removeChild(carouselSpinner);

  if (!list) {
    carouselProductsActive.appendChild(
      fetchFailure("Sorry, something went wrong")
    );
    carouselProducts.appendChild(fetchFailure("Sorry, something went wrong"));
  }

  carouselProductsActive.appendChild(addProducts(list, 0));
  carouselProductsActive.appendChild(addProducts(list, 1));
  carouselProductsActive.appendChild(addProducts(list, 2));

  carouselProducts.appendChild(addProducts(list, 3));
  carouselProducts.appendChild(addProducts(list, 4));
  carouselProducts.appendChild(addProducts(list, 5));
};
