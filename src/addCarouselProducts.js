import "./styles/style.scss";

export const addCarousel = (list) => {
  const carouselProducts = document.getElementById("carouselProducts");
  const newProduct = document.createElement("div");
  newProduct.classList = "main__carousel__card card col-4";

  const productImage = document.createElement("img");
  const productDescription = document.createElement("div");
  productDescription.classList =
    "main__carousel__card-description card-img-overlay d-flex flex-column justify-content-end";

  const productTitle = document.createElement("p");
  productTitle.classList = "card-text mb-2";
  productTitle.innerHTML = list[0].title;

  const productPrice = document.createElement("p");
  productPrice.classList = "card-text price";
  productPrice.innerHTML = `${list[0].id}$`;

  productImage.setAttribute("src", list[0].url);
  productImage.setAttribute("alt", list[0].title);
  productImage.classList.add("card-img");

  productDescription.appendChild(productTitle);
  productDescription.appendChild(productPrice);
  newProduct.appendChild(productImage);
  newProduct.appendChild(productDescription);

  carouselProducts.appendChild(newProduct);
};
