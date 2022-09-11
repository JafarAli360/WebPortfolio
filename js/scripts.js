// JavaScript Portfolio
const masuk = confirm("Mau Stalkers?");
if (masuk) {
  const name = prompt("Masukkan Namamu?");
  alert(`Welcome in My Portfolio ${name}`);
} else {
  alert("Ente kadang-kadang ente, Sudah Terlanjur Kesini");
}

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  let navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink Navbar
  navbarShrink();

  // Shrink Navbar Scroll
  document.addEventListener("scroll", navbarShrink);

  // Bootstrap
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Activate SimpleLightbox plugin for portfolio items
  new SimpleLightbox({
    elements: "#portfolio a.portfolio-box",
  });
});
