import "./styles/style.scss";
import * as Module from "./module.js";
import { fetchData } from "./fetchData.js";

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    Module.checkDate();
    Module.handleArrowTop();
    fetchData();
  });
})();
