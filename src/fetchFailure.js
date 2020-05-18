import "./styles/style.scss";

export const fetchFailure = (info, style) => {
  const failureInfo = document.createElement("div");
  failureInfo.classList = style;
  failureInfo.innerHTML = info;

  return failureInfo;
};
