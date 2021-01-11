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
const mybutton = document.getElementById('myBtn');
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
console.log(sectionsElements);
// Generate navbar from sections id names we got from the querySelectorAll
function gernerateNavbar() {
  sectionsElements.forEach((section) => {
    // add html tags for list items
    // dataset.nav returns DOMStringMap {nav: section 1}
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
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    // DOMRect object providing information about the size of an element and its position relative to the viewport.
    // viewport : A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed.

    let elementOffset = section.getBoundingClientRect();
    if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
      addActiveClass(section);
    } else {
      removeActiveClass(section);
    }
  });
}
// event listener to the dom itself so
document.addEventListener('scroll', makeActiveSection);

// get a button to scroll back to top of the page
//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener('click', topFunction);
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
