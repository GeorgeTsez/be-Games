const express = require("express");
const {
  getCategories,
  getReviews,
  getReviewId,
} = require("./controllers/controller");
const { handle500, handlePsql } = require("./controllers/controllers.error");
const app = express();

app.get("/api/categories", getCategories);
app.get("/api/reviews", getReviews);
app.get("/api/reviews/:review_id", getReviewId);

app.use(handlePsql);
app.use(handle500);

module.exports = app;
