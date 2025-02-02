//Do not change //////////////////////////////////
//import { calculateStarAverage } from "../src/logic.js";

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
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];


/////////////////////////////////////////////////////////////////////

//1. Append the reviews to the DOM

    //1.1 create function to render single review
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


    // 1.2 Function to loop through reviews data render and append them to <body>
    const renderAllReviews = (reviewsArray) => {
      reviewsArray.forEach(review => { 
          const reviewElement = renderReview(review);
          document.body.appendChild(reviewElement); // Append directly to <body>
      });
    };


    // 1.3 Call function with the reviews array
    renderAllReviews(reviews);


//2. Append new reviews to the DOM from the form

