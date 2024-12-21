// siteplan js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Site plan loaded successfully.");

    
    const headings = document.querySelectorAll("h2");

    headings.forEach(heading => {
        heading.addEventListener("click", () => {
            heading.style.backgroundColor = "#D3E4FF"; 
        });
    });

    
    const colorSchema = {
        headerColor: "#1E90FF",
        backgroundColor: "#F5F5F5",
    };

    console.log("Color schema applied:", colorSchema);
});
