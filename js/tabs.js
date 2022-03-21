const tabButtons = document.querySelectorAll(".design-list__item");
const tabDescription = document.querySelectorAll(".design__descr");
const tabImages = document.querySelectorAll(".design-images");
const titlePage = document.querySelector("title");
titlePage.textContent = document.querySelector('.design-list__item_active').outerText;
const tabBlock = document.querySelectorAll(".feature__img");
const tabTitle = document.querySelectorAll(".design__title");


const changeContent = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove("hidden");
    } else {
      elem.classList.add("hidden");
    }
  });
};

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", (event) => {
    const dataValue = tabButton.dataset.tabsHandler;

    changeContent(tabDescription, dataValue);
    changeContent(tabImages, dataValue);
    changeContent(tabBlock, dataValue);
    changeContent(tabTitle, dataValue);

    tabButtons.forEach((btn) => {
      const dataText = tabButton.outerText;
      if (btn === event.target) {
        btn.classList.add("design-list__item_active");
        titlePage.textContent = dataText;
      } else {
        btn.classList.remove("design-list__item_active");
      }
    });
  });
});
