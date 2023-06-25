// Get the necessary DOM elements
const navIcon = document.querySelector(".nav-icon");
const navLinks = document.querySelector(".nav-links");

// Add event listener to the navIcon
navIcon.addEventListener("click", () => {
  // Toggle the 'active' class on navLinks
  navLinks.classList.toggle("active");
});
