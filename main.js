'use strict';

const arrowDown = document.querySelector('.arrowdown');
const arrowUp = document.querySelector('.arrowup');
const dropDownContent = document.querySelector('.dropdowncontent');

const arrowDownTwo = document.querySelector('.art');
const arrowUpTwo = document.querySelector('.ard');
const dropDownContent2 = document.querySelector('.ddct');

const arrowDownFour = document.querySelector('.arte');
const arrowUpFour = document.querySelector('.arde');
const dropDownContent4 = document.querySelector('.ddcte');

const displayMenu = document.querySelector('.menu-open');
const closeMenu = document.querySelector('.menu-close');
const menu = document.querySelector('.menu');

const arrowDownThree = document.querySelector('.aro');
const arrowUpThree = document.querySelector('.ars');
const dropDownContent3 = document.querySelector('.drew');

const openDropdownFour = function () {
  dropDownContent4.classList.toggle('hidden');
  arrowDownFour.classList.toggle('hidden');
  arrowUpFour.classList.toggle('hidden');
};

const closeDropdownFour = function () {
  dropDownContent4.classList.toggle('hidden');
  arrowDownFour.classList.toggle('hidden');
  arrowUpFour.classList.toggle('hidden');
};

const openDropdownThree = function () {
  dropDownContent3.classList.toggle('hidden');
  arrowDownThree.classList.toggle('hidden');
  arrowUpThree.classList.toggle('hidden');
};
const closeDropdownThree = function () {
  dropDownContent3.classList.toggle('hidden');
  arrowDownThree.classList.toggle('hidden');
  arrowUpThree.classList.toggle('hidden');
};

const openDropdown = function () {
  dropDownContent.classList.toggle('hidden');
  arrowDown.classList.toggle('hidden');
  arrowUp.classList.toggle('hidden');
};

const openDropdownTwo = function () {
  dropDownContent2.classList.toggle('hidden');
  arrowDownTwo.classList.toggle('hidden');
  arrowUpTwo.classList.toggle('hidden');
};

const menuOpener = function () {
  menu.classList.toggle('hidden');
  displayMenu.classList.toggle('hidden');
  closeMenu.classList.toggle('hidden');
};

arrowDown.addEventListener('click', openDropdown);

arrowUp.addEventListener('click', openDropdown);

arrowDownTwo.addEventListener('click', openDropdownTwo);

arrowUpTwo.addEventListener('click', openDropdownTwo);

displayMenu.addEventListener('click', menuOpener);

closeMenu.addEventListener('click', menuOpener);

arrowDownThree.addEventListener('click', openDropdownThree);
arrowUpThree.addEventListener('click', closeDropdownThree);

arrowDownFour.addEventListener('click', openDropdownFour);
arrowUpFour.addEventListener('click', closeDropdownFour);
