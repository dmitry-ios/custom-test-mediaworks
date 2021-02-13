'use strict';

(() => {
  const warningAlert = document.querySelector(`#warning-alert`);
  const closeButton = document.querySelector(`#warning-alert button`);

  if (!warningAlert && !closeButton) {
    return;
  }

  warningAlert.classList.remove(`warning-alert--nojs`);

  const onAlertClose = () => {
    warningAlert.classList.add(`warning-alert--hidden`);
    closeButton.removeEventListener(`click`, onAlertClose);
  };

  closeButton.addEventListener(`click`, onAlertClose);
})();
