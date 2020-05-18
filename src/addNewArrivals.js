import { createProductElement } from "./createProductElement";
import { fetchFailure } from "./fetchFailure";

export const addNewArrivals = (list) => {
  const allProducts = document.getElementById("allProducts");
  allProducts.removeChild(carouselSpinner);
  if (!Array.isArray(list)) {
    allProducts.appendChild(
      fetchFailure("Sorry, something went wrong", "failure-info-dark")
    );
  }
  const numberOfNeededArrivals = 8;
  for (let i = 0; i < numberOfNeededArrivals; i++) {
    allProducts.appendChild(createProductElement(list, i));
  }
};
