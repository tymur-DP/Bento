const modal = document.querySelector(".backdrop");
const modal2 = document.querySelector(".backdrop2");

const modalBtnOpen = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelectorAll("#close");

for (let i = 0; i < modalBtnOpen.length; i++) {
  modalBtnOpen[i].addEventListener("click", () => {
    modal.classList.remove("is-hidden");
    document.querySelector("body").style.overflow = "hidden";
  });
}
for (let i = 0; i < modalBtnClose.length; i++) {
  modalBtnClose[i].addEventListener("click", (e) => {
    if (!e.target.closest(".form-wrapper")) {
      modal.classList.add("is-hidden");
      modal2.classList.add("is-hidden");
      document.querySelector("body").style.overflow = "visible";
      document.querySelector("body").style = "overflow-X: hidden";
    }
  });
}

const changeModal = document.getElementById("formChange");
changeModal.addEventListener("click", () => {
  modal.classList.add("is-hidden");
  modal2.classList.remove("is-hidden");
  document.querySelector("body").style.overflow = "hidden";
  modal.reset();
});
