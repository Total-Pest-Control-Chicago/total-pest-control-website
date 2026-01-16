/*
const navBar = document.querySelector('.navBar');
const navLink = document.querySelector('.navbar');

navBar.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
*/

document.addEventListener("DOMContentLoaded", function() {
  // Select the elements: the navbar and all navigation links
  var navbar = document.querySelector(".navbar");
  var navLinks = navbar.querySelectorAll("a[href^='#']");

  // Function to hide the navbar
  function hideNavbar() {
      navbar.classList.add("hide");
  }

  // Add click event listener for each nav link
  navLinks.forEach(function(link) {
      link.addEventListener("click", hideNavbar);
  });

  // Functionality for the hamburger icon
  var navBarIcon = document.querySelector(".navBar");
  navBarIcon.addEventListener("click", function() {
      navbar.classList.toggle("hide");
  });
});
