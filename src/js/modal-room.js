(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-room-open]"),
    closeModalBtn: document.querySelector("[data-modal-room-close]"),
    modal: document.querySelector("[data-modal-room]"),
  };
  
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
  
})();

 //validace formy

const inputName = document.querySelector(".modal-input");

const nameInput = (event) => {

  event.preventDefault();

  const inputName = event.currentTarget.elements.user_name.value;

  if (!/^[A-ZĚŠČŘŽÝÁÍÉŮÚŤŇÓ][a-zěščřžýáíéůúťňó]+$/.test(inputName)) {
    console.log("Jméno musí začínat velkým písmenem a obsahovat pouze písmena.");
    return;
  }
}

inputName.addEventListener("focus", nameInput);

