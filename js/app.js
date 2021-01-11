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

// Generate navbar from sections id names we got from the querySelectorAll
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

// Add class 'active' to section when near top of viewport (Eye level )

function addActiveClass(section) {
  // get the id from the section
  const id = section.getAttribute('id');

  // add the active class to the section
  document.querySelector(`#${id}`).classList.add('your-active-class');
}

//Removing the active class from the section
function removeActiveClass(section) {
  const id = section.getAttribute('id');
  document.querySelector(`#${id}`).classList.remove('your-active-class');
}

// calcualting when the section is active
function makeActiveSection() {
  sectionsElements.forEach((section) => {
    let elementOffset = section.getBoundingClientRect();
    if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
      addActiveClass(section);
    } else {
      removeActiveClass(section);
    }
  });
}
document.addEventListener('scroll', makeActiveSection);

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
