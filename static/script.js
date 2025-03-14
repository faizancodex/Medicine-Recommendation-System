// Function to open the specified popup
function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'flex';
}

// Function to close the specified popup
function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
}

// hamburgermenu

const hamburgermenu = document.querySelector("#hamburgermenu");
const navMenu = document.querySelector("#navMenu");

hamburgermenu.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("open");

    // Update aria-expanded for accessibility
    const isExpanded = this.classList.contains("active");
    this.setAttribute("aria-expanded", isExpanded);
});

