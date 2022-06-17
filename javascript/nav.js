const nav = document.querySelector(".nav");
const navToggleButton = document.querySelector(".nav__toggle");

export const showNavBar = (navBar, toggleNavBtn) => {
    navBar.setAttribute("data-visible", true);
    toggleNavBtn.setAttribute("aria-expanded", true);
};

export const hideNavBar = (navBar, toggleNavBtn) => {
    navBar.setAttribute("data-visible", false);
    toggleNavBtn.setAttribute("aria-expanded", false);
};

navToggleButton.addEventListener("click", () => {
    const navVisibility = nav.getAttribute("data-visible");
    if (navVisibility === "false") {
        showNavBar(nav, navToggleButton);
    } else {
        hideNavBar(nav, navToggleButton);
    }
});

// closes the mobile menu when clicked on an anchor tag that leads to a section on the same page
const handleNavClick = (e) => {
    if (e.target instanceof HTMLAnchorElement) {
        hideNavBar(nav, navToggleButton);
    }
};

nav.addEventListener("click", handleNavClick);
