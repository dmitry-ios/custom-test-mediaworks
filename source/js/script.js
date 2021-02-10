'use strict';

(function () {
  const nav = document.querySelector(`.main-header__navigation`);
  const toggle = document.querySelector(`.main-header__navigation button[type="button"]`);

  nav.classList.remove(`main-header__navigation--nojs`);

  toggle.addEventListener(`click`, () => {
    if (nav.classList.contains(`main-header__navigation--closed`)) {
      nav.classList.remove(`main-header__navigation--closed`);
      document.body.classList.add(`page__body--fullscreen`);
    } else {
      nav.classList.add(`main-header__navigation--closed`);
      document.body.classList.remove(`page__body--fullscreen`);
    }
  });
})();
