'use strict';
const burger = document.querySelector('.burger');
const menu = burger.previousElementSibling;
burger.addEventListener('click', () => {
   burger.classList.toggle('burgerJS');
   menu.classList.toggle('burgerJS');
   burger.closest('body').classList.toggle('burgerJS');
});

const dropdown = document.querySelector('.dropdown__button');
dropdown.addEventListener('click', () => {
   dropdown.closest('.dropdown').classList.toggle('dropJS');
});

const language = document.querySelector('.lang__box');
language.addEventListener('click', (e) => {
   if (e.target.classList.contains('activeLangJS')) {
      e.target.classList.remove('activeLangJS');
      if (!e.target.nextElementSibling) {
         e.target.previousElementSibling.previousElementSibling.classList.add('activeLangJS');
      } else {
         e.target.nextElementSibling.classList.add('activeLangJS');
      }
   }
});

function append() {
   const child = document.querySelector('[data-parent]');
   const parentElement = document.querySelector(`${child.dataset.parent}`);
   parentElement.appendChild(child);
}
if (document.documentElement.clientWidth <= 768) {
   append();
}
