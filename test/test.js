import { assert } from "chai";

import { calculateStarAverage } from "../src/logic.js";

const mockReviews = [
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
    image: "./images/avitar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];

describe("Should Calculate The average Star Rating", () => {
  it("should return a number", () => {
    console.log(calculateStarAverage);
    const result = calculateStarAverage(mockReviews);
    assert.typeOf(result, "number", "should return a number");
  });

  it('should return the average star rating"', () => {
    const reviewAverage = 3;
    const result = calculateStarAverage(mockReviews);
    assert.equal(result, reviewAverage, "Should return the review average");
  });
});
