/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const sectionsElements = document.querySelectorAll('section');
const navbarUl = document.getElementById('navbar__list');
// change title's text
const title = document.getElementById('landing-title');
let navList = '';
title.textContent = `Udactiy's Project`;
/**
 * End Global Variables
 * Start Helper Functions
 
 *
 */
console.log('dsada');
function gernerateNavbar() {
  sectionsElements.forEach((section) => {
    // add html tags for list items
    navList += `<li> <a class="nav__link menu__link" href="#${section.id}">
          ${section.dataset.nav}</a></li>`;
  });
  // add the tags to the inner htmls
  navbarUl.innerHTML = navList;
}
gernerateNavbar();
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
