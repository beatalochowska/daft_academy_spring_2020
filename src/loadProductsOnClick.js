import { createProductElement } from "./createProductElement";

export const loadProductsOnClick = (list) => {
  const addProductsButton = document.getElementById("addAllProducts");
  const allProducts = document.getElementById("allProducts");
  const numberOfNeededProducts = 4;

  addProductsButton.addEventListener("click", (event) => {
    event.preventDefault();

    for (let i = 0; i < numberOfNeededProducts; i++) {
      allProducts.appendChild(createProductElement(list, i));
    }
  });
};
