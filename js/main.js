const hamburgerButton = document.querySelector("#hamburgerButton");
const emailSubscribeForm = document.querySelector("#emailSubscribeForm");
hamburgerButton.addEventListener("click", () => {
  showHamburgerMenu();
});
function showHamburgerMenu() {
  const navbarLinkSection = document.querySelector(".navbar-link-section");
  navbarLinkSection.style.display =
    navbarLinkSection.style.display !== "flex" ? "flex" : "none";
}
emailSubscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
