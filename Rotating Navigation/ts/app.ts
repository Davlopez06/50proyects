let isOpen = false;

const removeClass = (selectors: Array<Element>) =>
  selectors.forEach((selector: Element) => {
    const className = selector.className.split(" ");
    selector.classList.remove(`${className[0]}-active`);
  });

const addClass = (selectors: Array<Element>) =>
  selectors.forEach((selector: Element) => {
    const className = selector.className.split(" ");
    selector.classList.add(`${className[0]}-active`);
  });

const setIsOpen = () => {
  if (typeof document !== "undefined" || document) {
    const nav = document.querySelector(".page-nav");
    const ctn = document.querySelector(".page-ctn");
    const contact = document.querySelector(".page-contact");
    if (nav && ctn && contact) {
      nav;
      const selectors = [nav, ctn, contact];
      if (isOpen) {
        addClass(selectors);
      } else {
        removeClass(selectors);
      }
    }
  }
};

const handleClose = () => {
  isOpen = false;
  setIsOpen();
};

const handleOpen = () => {
  isOpen = true;
  setIsOpen();
};
