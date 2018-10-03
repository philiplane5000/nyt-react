import axios from "axios";

export default {

  //WHITTLE THIS DOWN LATER (OR NEW FILE)
  buildQueryURL: ({ topic, startYear, endYear }) => {
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    let queryParams = { "apiKey": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931" };
    queryParams.topic = topic;
    queryParams.begin_date = `${startYear}0101`;
    queryParams.end_date = `${endYear}0101`
    let completeURL = `${queryURL}q=${queryParams.topic}&begin_date=${queryParams.begin_date}&end_date=${queryParams.end_date}&api-key=${queryParams.apiKey}`
    return completeURL
  },

  runNewSearch(queryURL) {
    return axios.get(queryURL)
  },
  //ALL API ROUTES TO FETCH mongoDB DATA (SAVED ARTICLES):
  // Saves a new article to the database
  saveArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  },
  // Gets all saved articles
  getSavedArticles: function () {
    return axios.get("/api/articles");
  },
  // Gets the articles with the given id
  getSavedArticle: function (id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteSavedArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  },

};
