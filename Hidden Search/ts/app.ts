let isShow = false;

const removeClass = (selector: Element) => {
    const className = selector.className.split(" ");
    selector.classList.remove(`${className[0]}-hide`);
}

const addClass = (selector: Element) => {
  const className = selector.className.split(" ");
  selector.classList.add(`${className[0]}-hide`);
}


const setIsShow = () => {
  if (typeof document !== "undefined" || document) {
    const img = document.querySelector(".input-ctn-text");
    if (img) {
      if (isShow) {
        addClass(img)
        isShow = false;
      } else {
        removeClass(img);
        isShow = true;
      }
    }
  }
};

const handleClick = () => {
  setIsShow();
};
