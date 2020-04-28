import "./styles/style.scss";

export const handleArrowTop = () => {
  const btnClasses = document.querySelector(".scroll-to-top").classList;

  window.addEventListener("scroll", () => {
    const under = window.pageYOffset > window.innerHeight / 2;

    under ? btnClasses.remove("hidden") : btnClasses.add("hidden");
  });
};

export const checkDate = () => {
  const yearPlaceholder = document.getElementById("currentYear");
  const today = new Date();
  const currentYear = today.getFullYear();
  yearPlaceholder.innerHTML += currentYear;
};

const createProductElement = () => {
  const singleProduct = document.createElement("div");
  singleProduct.classList = "new__card card col-12 col-sm-6 col-md-4 col-lg-3";

  const link = document.createElement("a");
  link.setAttribute("href", "#");

  const image = document.createElement("img");
  image.setAttribute("src", "https://picsum.photos/309/390");
  image.setAttribute("alt", "Coat");
  image.classList = "card-img-top w-90";

  link.appendChild(image);

  const description = document.createElement("div");
  description.classList = "card-body";

  const title = document.createElement("a");
  title.classList = "card-text new__product-name";
  title.setAttribute("href", "#");
  title.textContent = "Coat";

  const price = document.createElement("span");
  price.classList = "card-text price";
  price.textContent = "$49.99";

  description.appendChild(title);
  description.appendChild(price);

  singleProduct.appendChild(link);
  singleProduct.appendChild(description);

  return singleProduct;
};

export const loadProductsOnClick = () => {
  const addProductsButton = document.getElementById("addAllProducts");
  const allProducts = document.getElementById("allProducts");
  const numberOfNeededProducts = 4;

  addProductsButton.addEventListener("click", (event) => {
    event.preventDefault();
    for (let i = 0; i < numberOfNeededProducts; i++) {
      allProducts.appendChild(createProductElement());
    }
  });
};
