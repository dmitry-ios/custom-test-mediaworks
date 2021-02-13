'use strict';

(() => {
  const button = document.querySelector(`#enter-login-button`);
  const modal = document.querySelector(`.login`);
  const closeButton = document.querySelector(`#close-button`);

  const onCloseModal = () => {
    modal.classList.add(`login--closed`);
    closeButton.removeEventListener(`click`, onCloseModal);
  };

  button.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    modal.classList.remove(`login--closed`);
    closeButton.addEventListener(`click`, onCloseModal);
  });
})();
