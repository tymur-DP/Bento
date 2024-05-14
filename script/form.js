document.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelectorAll("#button");
  const formMenu = document.getElementById("formMenu");
  menu[0].addEventListener("click", (event) => {
    formMenu.classList.remove("hidden");
  });

  const closeMenu = document.querySelector("#closeMenu");
  closeMenu.addEventListener("click", (event) => {
    formMenu.classList.add("hidden");
  });

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", formsend);
  const sent = document.getElementById("sent");

  function sentOK() {
    form.reset();
    sent.classList.remove("hidden");
    form.classList.remove("sending");
  }

  async function formsend(sender) {
    sender.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add("sending");

      setTimeout(() => {
        sentOK();
      }, 1000);
    }

    function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll("._req");

      for (let i = 0; i < formReq.length; i++) {
        const input = formReq[i];
        formRemoveError(input);
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
      return error;
    }

    function formAddError(input) {
      input.parentElement.classList.add("_error");
      input.classList.add("_error");
    }

    function formRemoveError(input) {
      input.parentElement.classList.remove("_error");
      input.classList.remove("_error");
    }
  }
});
