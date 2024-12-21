// review.js: JavaScript for Review Confirmation Page
document.addEventListener("DOMContentLoaded", () => {
    
    const counterKey = "reviewCounter";
    const reviewCounterElement = document.getElementById("review-counter");

    let reviewCount = parseInt(localStorage.getItem(counterKey)) || 0;
    reviewCount++;
    localStorage.setItem(counterKey, reviewCount);

    reviewCounterElement.textContent = reviewCount;

    
    const urlParams = new URLSearchParams(window.location.search);

    
    document.getElementById("submitted-product-name").textContent = urlParams.get("product-name") || "N/A";
    document.getElementById("submitted-rating").textContent = urlParams.get("rating") || "N/A";
    document.getElementById("submitted-installation-date").textContent = urlParams.get("installation-date") || "N/A";
    document.getElementById("submitted-features").textContent = urlParams.getAll("features").join(", ") || "N/A";
    document.getElementById("submitted-review").textContent = urlParams.get("written-review") || "N/A";
    document.getElementById("submitted-user-name").textContent = urlParams.get("user-name") || "N/A";
});
