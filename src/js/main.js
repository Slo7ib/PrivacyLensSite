import "/src/css/style.css";
import javascriptLogo from "/src/assets/javascript.svg";
import viteLogo from "/vite.svg";
function updateYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }
}
updateYear();
// Optional: update every 24 hours if page stays open
setInterval(updateYear, 86400000);

const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
