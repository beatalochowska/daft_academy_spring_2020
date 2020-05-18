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
