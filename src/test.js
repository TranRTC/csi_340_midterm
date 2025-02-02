// Sample reviews array
console.log("JavaScript file is loaded!");

const reviews = [
    {
        username: "Rose",
        image: "./images/rose.png",
        star: 5,
        review: "Great coffee and ambiance",
    },
    {
        username: "butterfly2222",
        image: "./images/avatar2.png",
        star: 3,
        review: "Coffee was okay, took way too long to make.",
    },
    {
        username: "Sandy Tuna",
        image: "./images/avatar1.png",
        star: 1,
        review: "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
    },
   
    
];



// 1.1 Function to render a single review
const renderReview = (review) => {
    // Create review container
    const reviewContainer = document.createElement("div");
    reviewContainer.classList.add("review_container");

    // Create image element
    const img = document.createElement("img");
    img.src = review.image;
    img.alt = `${review.username}'s profile picture`;

    // Create div to hold review content
    const reviewContent = document.createElement("div");

    // Create username element
    const userName = document.createElement("p");
    userName.textContent = review.username;

    // Create rating element
    const userRating = document.createElement("p");
    userRating.textContent = `⭐ ${review.star} / 5`;

    // Create review text element
    const userReview = document.createElement("p");
    userReview.textContent = review.review;

    // Append username, rating, and review text to content div
    reviewContent.append(userName, userRating, userReview);

    // Append image and review content to main container
    reviewContainer.append(img, reviewContent);

    return reviewContainer;
};

// 1.2 Function to loop through reviews and append them to review section

const renderAllReviews = (reviewsArray) => {
    const reviewSection = document.querySelector(".reviews");

    console.log("Form submitted!");


    if (!reviewSection) {
        console.error("Error: The reviews section does not exist in the DOM.");
        return;
    }
    
    // Clear existing reviews (but keep the <h3> title)
    reviewSection.innerHTML = "<h3>Reviews</h3>";
    

    reviewsArray.forEach(review => {
        const reviewElement = renderReview(review);
        reviewSection.appendChild(reviewElement);
    });

};


// 1.3 Call function with the reviews array
renderAllReviews(reviews);


//2. Append new reviews to the DOM from the form


const reviewForm = document.querySelector("form");


reviewForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form refresh

    // Get form values
    const username = document.getElementById("username").value;
    const image = document.getElementById("image").value;
    const star = parseInt(document.getElementById("star").value);
    const reviewText = document.getElementById("review").value;

    // Ensure all fields are filled
    if (!username || !image || !reviewText) {
        alert("Please fill in all fields.");
        return;
    }

    // Create review object
    const newReview = {
        username: username,
        image: image,
        star: star,
        review: reviewText
    };

    // Debugging log
    console.log("New Review Added:", newReview);

    // Add new review to the array
    reviews.push(newReview);

    // Update the DOM
    renderAllReviews(reviews);

    //Clear form
    reviewForm.reset();
});

