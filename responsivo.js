document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const linksHeader = document.querySelector(".links-header");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        linksHeader.classList.toggle("active");
    });
});