'use strict';

(function () {
  const button = document.querySelector(`#enter-login-button`);
  const modal = document.querySelector(`.login`);
  const closeButton = document.querySelector(`#close-button`);

  const onCloseModal = function () {
    modal.classList.add(`login--closed`);
    closeButton.removeEventListener(`click`, onCloseModal);
  };

  button.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    modal.classList.remove(`login--closed`);
    closeButton.addEventListener(`click`, onCloseModal);
  });

})();
