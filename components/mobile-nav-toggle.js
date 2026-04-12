export function init() {
    const openNavBtn = document.querySelector("#open-nav");
    const closeNavBtn = document.querySelector("#close-nav");
    const navLinks = document.querySelector("#nav-links");

    openNavBtn.addEventListener("click", () => {
        navLinks.classList.remove("hidden");
        closeNavBtn.classList.remove("hidden");
    });

    closeNavBtn.addEventListener("click", () => {
        navLinks.classList.add("hidden");
        closeNavBtn.classList.add("hidden");
    });
}