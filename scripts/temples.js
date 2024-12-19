// temples.js: JavaScript functionality

document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu toggle
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        menu.classList.toggle("visible");
        // Cambia el icono entre ☰ y ✖
        hamburger.textContent = menu.classList.contains("visible") ? "✖" : "☰";
    });

    // Footer: Display last modified date
    const lastModifiedElement = document.getElementById("last-modified");
    const lastModified = document.lastModified;
    lastModifiedElement.textContent += lastModified;
});
