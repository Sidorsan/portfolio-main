const modalButton = document.querySelectorAll(".more");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".overlay");
const closeButton = modal.querySelector(".modal__close");

const modalHidden = () => {
  modal.classList.toggle("hidden");
};

modalButton.forEach((btn) => {
  btn.addEventListener("click", modalHidden);
});

overlay.addEventListener("click", modalHidden);

closeButton.addEventListener("click", modalHidden);
