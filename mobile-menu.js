"use strict";

const menuBtnRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");
const menuLinksRefs = document.querySelectorAll(".menu-list-link");

const toggleMenu = () => {
  const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

  menuBtnRef.classList.toggle("is-open");
  menuBtnRef.setAttribute("aria-expanded", !expanded);

  mobileMenuRef.classList.toggle("is-open");
};

menuBtnRef.addEventListener("click", toggleMenu);

menuLinksRefs.forEach((link) => link.addEventListener("click", toggleMenu));