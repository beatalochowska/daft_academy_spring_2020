import "./styles/style.scss";

export const fetchFailure = (info) => {
  const failureInfo = document.createElement("div");
  failureInfo.classList = "failure-info-color";
  failureInfo.innerHTML = info;

  return failureInfo;
};
