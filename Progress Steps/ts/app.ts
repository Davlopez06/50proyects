let step = 1;

const classRemove = (selector) => {
  const selectorClass = selector.className.split(" ");
  if (selector.className.includes(`${selectorClass[0]}-active`)) {
    selector.classList.remove(`${selectorClass[0]}-active`);
  }
};

const classAdd = (selector) => {
  const selectorClass = selector.className.split(" ");
  if (!selector.className.includes(`${selectorClass[0]}-active`)) {
    selector.classList.add(`${selectorClass[0]}-active`);
  }
};

const validateButtons = (selectorChildren) => {
  if (step <= 1) {
    classRemove(selectorChildren[0]);
  } else {
    classAdd(selectorChildren[0]);
  }

  if (step >= 4) {
    classRemove(selectorChildren[1]);
  } else {
    classAdd(selectorChildren[1]);
  }
};

const validate = () => {
  if (typeof document !== "undefined" || document) {
    const step_ctn = document.querySelector(".steps-ctn");
    const butotons_ctn = document.querySelector(".buttons-ctn");
    if (step_ctn && step_ctn.children) {
      const steps = step + (step - 1) * 1;
      for (let i = 0; i < step_ctn.children.length; i++) {
        if (i < steps) {
          classAdd(step_ctn.children[i]);
        } else {
          classRemove(step_ctn.children[i]);
        }
      }
    }
    if (butotons_ctn && butotons_ctn.children) {
      validateButtons(butotons_ctn.children);
    }
  }
};

const handleClickPrev = () => {
  step--;
  validate();
};

const handleClickNext = () => {
  step++;
  validate();
};
