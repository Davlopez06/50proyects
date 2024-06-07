const handleClick = (card: number) => {
  if (typeof document !== "undefined" || document) {
    const slider = document.querySelector(".cards-ctn");
    if (slider && slider.children) {
      for (let i = 0; i < slider.children.length; i++) {
        if (i === card - 1) {
          slider.children[i].classList.add("cards-card-active");
        } else {
          slider.children[i].classList.remove("cards-card-active");
        }
      }
    }
  }
};
