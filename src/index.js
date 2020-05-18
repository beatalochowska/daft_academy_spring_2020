import "./styles/style.scss";
import * as Module from "./module.js";
import * as Fetch from "./fetchData.js";

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    Module.checkDate();
    Module.handleArrowTop();
    Module.loadProductsOnClick();
    Fetch.downloadedData();
  });
})();
