var isOpen = false;
var removeClass = function (selectors) {
    return selectors.forEach(function (selector) {
        var className = selector.className.split(" ");
        selector.classList.remove("".concat(className[0], "-active"));
    });
};
var addClass = function (selectors) {
    return selectors.forEach(function (selector) {
        var className = selector.className.split(" ");
        selector.classList.add("".concat(className[0], "-active"));
    });
};
var setIsOpen = function () {
    if (typeof document !== "undefined" || document) {
        var nav = document.querySelector(".page-nav");
        var ctn = document.querySelector(".page-ctn");
        var contact = document.querySelector(".page-contact");
        if (nav && ctn && contact) {
            nav;
            var selectors = [nav, ctn, contact];
            if (isOpen) {
                addClass(selectors);
            }
            else {
                removeClass(selectors);
            }
        }
    }
};
var handleClose = function () {
    isOpen = false;
    setIsOpen();
};
var handleOpen = function () {
    isOpen = true;
    setIsOpen();
};
