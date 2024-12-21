// review.js: JavaScript for Review Confirmation Page

document.addEventListener("DOMContentLoaded", () => {
    // Increment and display the review counter using localStorage
    const counterKey = "reviewCounter";
    const reviewCounterElement = document.getElementById("review-counter");

    let reviewCount = parseInt(localStorage.getItem(counterKey)) || 0;
    reviewCount++;
    localStorage.setItem(counterKey, reviewCount);

    reviewCounterElement.textContent = reviewCount;

    // Display submitted details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);

    const productName = urlParams.get("product-name") || "N/A";
    const rating = urlParams.get("rating") || "N/A";
    const installationDate = urlParams.get("installation-date") || "N/A";
    const features = urlParams.getAll("features").join(", ") || "N/A";
    const writtenReview = urlParams.get("written-review") || "N/A";
    const userName = urlParams.get("user-name") || "N/A";

    document.getElementById("submitted-product-name").textContent = productName;
    document.getElementById("submitted-rating").textContent = rating;
    document.getElementById("submitted-installation-date").textContent = installationDate;
    document.getElementById("submitted-features").textContent = features;
    document.getElementById("submitted-review").textContent = writtenReview;
    document.getElementById("submitted-user-name").textContent = userName;
});

const productFeatures = {
    Smartphone: ["Long Battery Life", "High-Quality Camera", "Waterproof"],
    Laptop: ["Lightweight", "High Performance", "Long Battery Life"],
    Movie: ["Great Acting", "Excellent Storyline", "Characters"]
};
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");
    const featuresContainer = document.getElementById("features-container");

    productSelect.addEventListener("change", () => {
        const selectedProduct = productSelect.options[productSelect.selectedIndex].text;
        const features = productFeatures[selectedProduct] || [];

        // Clear existing features
        featuresContainer.innerHTML = "";

        // Add features dynamically
        features.forEach((feature, index) => {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = `feature-${index}`;
            checkbox.name = "features";
            checkbox.value = feature;

            const label = document.createElement("label");
            label.setAttribute("for", `feature-${index}`);
            label.textContent = feature;

            featuresContainer.appendChild(checkbox);
            featuresContainer.appendChild(label);
            featuresContainer.appendChild(document.createElement("br"));
        });
    });
});

