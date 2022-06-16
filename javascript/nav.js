export const showNavBar = (navBar, toggleNavBtn) => {
    navBar.setAttribute("data-visible", true);
    toggleNavBtn.setAttribute("aria-expanded", true);
};

export const hideNavBar = (navBar, toggleNavBtn) => {
    navBar.setAttribute("data-visible", false);
    toggleNavBtn.setAttribute("aria-expanded", false);
};
