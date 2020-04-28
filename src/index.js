import "./styles/style.scss";
import * as Module from "./module.js";

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    Module.checkDate();
    Module.handleArrowTop();
    Module.loadProductsOnClick();
  });
})();
