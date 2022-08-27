/* (() => {
  const refs = {
    openMenuBtn: document.querySelector(".header__menu-open-button"),
    closeMenuBtn: document.querySelector(".mob-menu__close-button"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})(); */

(() => {
  const mobileMenu = document.querySelector(".mob-menu");
  const openMenuBtn = document.querySelector(".header__menu-open-button");
  const closeMenuBtn = document.querySelector(".mob-menu__close-button");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-hidden");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-hidden");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
