import "./styles/style.scss";

export const createProductElement = (list, index) => {
  const singleProduct = document.createElement("div");
  singleProduct.classList = "new__card card col-12 col-sm-6 col-md-4 col-lg-3";

  const link = document.createElement("a");
  link.setAttribute("href", "#");

  const image = document.createElement("img");
  image.setAttribute("src", list[index].url);
  image.setAttribute("alt", list[index].title);
  image.classList = "card-img-top w-90";

  link.appendChild(image);

  const description = document.createElement("div");
  description.classList = "card-body";

  const title = document.createElement("a");
  title.classList = "card-text new__product-name";
  title.setAttribute("href", "#");
  title.textContent = list[index].title;

  const price = document.createElement("span");
  price.classList = "card-text price";
  price.textContent = `${list[index].id}$`;

  description.appendChild(title);
  description.appendChild(price);

  singleProduct.appendChild(link);
  singleProduct.appendChild(description);

  return singleProduct;
};
