const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  _id: { type: String, required: true },
  headline: { type: String, required: true },
  url: { type: String, required: true },
  pubDate: { type: String }, /*OR...*/ /*{ type: Date, default: Date.now },*/
}, {_id: false});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
