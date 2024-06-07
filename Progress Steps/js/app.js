var step = 1;
var classRemove = function (selector) {
    var selectorClass = selector.className.split(" ");
    if (selector.className.includes("".concat(selectorClass[0], "-active"))) {
        selector.classList.remove("".concat(selectorClass[0], "-active"));
    }
};
var classAdd = function (selector) {
    var selectorClass = selector.className.split(" ");
    if (!selector.className.includes("".concat(selectorClass[0], "-active"))) {
        selector.classList.add("".concat(selectorClass[0], "-active"));
    }
};
var validateButtons = function (selectorChildren) {
    if (step <= 1) {
        classRemove(selectorChildren[0]);
    }
    else {
        classAdd(selectorChildren[0]);
    }
    if (step >= 4) {
        classRemove(selectorChildren[1]);
    }
    else {
        classAdd(selectorChildren[1]);
    }
};
var validate = function () {
    if (typeof document !== "undefined" || document) {
        var step_ctn = document.querySelector(".steps-ctn");
        var butotons_ctn = document.querySelector(".buttons-ctn");
        if (step_ctn && step_ctn.children) {
            var steps = step + (step - 1) * 1;
            for (var i = 0; i < step_ctn.children.length; i++) {
                if (i < steps) {
                    classAdd(step_ctn.children[i]);
                }
                else {
                    classRemove(step_ctn.children[i]);
                }
            }
        }
        if (butotons_ctn && butotons_ctn.children) {
            validateButtons(butotons_ctn.children);
        }
    }
};
var handleClickPrev = function () {
    step--;
    validate();
};
var handleClickNext = function () {
    step++;
    validate();
};
