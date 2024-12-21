// siteplan.js: JavaScript for Site Plan

document.addEventListener("DOMContentLoaded", () => {
    console.log("Site plan loaded successfully.");

    // Example interaction: Highlight all headings when clicked
    const headings = document.querySelectorAll("h2");

    headings.forEach(heading => {
        heading.addEventListener("click", () => {
            heading.style.backgroundColor = "#D3E4FF"; // Light blue highlight
        });
    });

    // Example interaction: Log color schema to console
    const colorSchema = {
        headerColor: "#1E90FF",
        backgroundColor: "#F5F5F5",
    };

    console.log("Color schema applied:", colorSchema);
});
