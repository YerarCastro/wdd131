// finalProject.js: JavaScript for Final Project

document.addEventListener("DOMContentLoaded", () => {
    // Simulate stored reviews in localStorage or array for demonstration
    const storedReviews = [
        {
            title: "Amazing Smartphone!",
            rating: 5,
            thumbnail: "images/phonefinalproject.jpg",
            details: "This phone has excellent features and great battery life."
        },
        {
            title: "Great Laptop",
            rating: 4,
            thumbnail: "images/laptopfinalproject.jpg",
            details: "Lightweight and powerful, perfect for work and travel."
        },
        {
            title: "Movie Night Bliss",
            rating: 5,
            thumbnail: "images/godzillafinalproject.jpg",
            details: "One of the best movies I've watched this year. Highly recommend it!"
        }
    ];

    const reviewsContainer = document.getElementById("reviews-container");

    // Populate the recent reviews section
    function displayReviews() {
        reviewsContainer.innerHTML = ""; // Clear existing content

        storedReviews.forEach((review) => {
            const reviewElement = document.createElement("div");
            reviewElement.classList.add("review");

            reviewElement.innerHTML = `
                <img src="${review.thumbnail}" alt="${review.title} Thumbnail">
                <h3>${review.title}</h3>
                <p class="rating">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</p>
                <p>${review.details}</p>
                <a href="#">View Details</a>
            `;

            reviewsContainer.appendChild(reviewElement);
        });
    }

    displayReviews();

    
});
