window.addEventListener('DOMContentLoaded', function(e) {
   'use strict';
   // MENU 
   const openMenuBtn = document.querySelector('#menu-btn');
   const closeMenuBtn = document.querySelector('#close-menu');
   const menu = document.querySelector('#menu');
   let isMenuOpen = false;
   // open menu
   openMenuBtn.addEventListener('click', function(e) {
      if (!isMenuOpen) {
         isMenuOpen = true;
         openMenuBtn.classList.add('navbar__btn--open');
         menu.classList.add('menu--open');
      }
   });
   // close menu
   closeMenuBtn.addEventListener('click', function(e) {
      if (isMenuOpen) {
         isMenuOpen = false;
         openMenuBtn.classList.remove('navbar__btn--open');
         menu.classList.remove('menu--open');
      }
   });
});

