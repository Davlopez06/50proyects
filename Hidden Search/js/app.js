var isShow = false;
var removeClass = function (selector) {
    var className = selector.className.split(" ");
    selector.classList.remove("".concat(className[0], "-hide"));
};
var addClass = function (selector) {
    var className = selector.className.split(" ");
    selector.classList.add("".concat(className[0], "-hide"));
};
var setIsShow = function () {
    if (typeof document !== "undefined" || document) {
        var img = document.querySelector(".input-ctn-text");
        if (img) {
            if (isShow) {
                addClass(img);
                isShow = false;
            }
            else {
                removeClass(img);
                isShow = true;
            }
        }
    }
};
var handleClick = function () {
    setIsShow();
};
