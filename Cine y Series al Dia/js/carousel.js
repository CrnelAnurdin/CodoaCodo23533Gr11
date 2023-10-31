document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel_item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
      <div class="carousel__nav">
          ${buttonsHtml.join("")}
      </div>
    `
  );

  const buttons = carousel.querySelectorAll(".carousel__button");
  let currentIndex = 0; 

  function showItem(index) {
    items.forEach((item) => item.classList.remove("carousel_item--selected"));
    buttons.forEach((button) => button.classList.remove("carousel__button--selected"));

    items[index].classList.add("carousel_item--selected");
    buttons[index].classList.add("carousel__button--selected");
  }

  function nextItem() {
    currentIndex = (currentIndex + 1) % items.length; 
    showItem(currentIndex);
  }

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      currentIndex = i;
      showItem(i);
    });
  });
  
  setInterval(nextItem, 5000);  
  showItem(currentIndex);
});
  