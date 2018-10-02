const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytreact"
);

const articleSeed = [
  {
    title: "The Dead Zone",
    date: new Date(Date.now()),
    url: "https://www.google.com/"
  },
  {
    title: "Born a Crime: Stories from a South African Childhood",
    date: new Date(Date.now()),
    url: "https://www.google.com/"
  },
  {
    title: "Trump is a complete buffoon and his Twitter feed proves it",
    date: new Date(Date.now()),
    url: "https://www.google.com/"
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
