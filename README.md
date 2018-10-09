# New York Times Archive Explorer

Hosted on Heroku: [NYT Article Explorer](https://quiet-island-12161.herokuapp.com/)

### About

* Uncover articles published by the New York Times dating all the way back to 1851 with `NYT Article Explorer`! Simply provide a search term or set of keywords, as well as a start and end year as search parameters, click `SUBMIT` and receive up to 10 articles matching your query. 

* For every article which fits the query, `NYT Archive Explorer` will return it's `headline`, `byline`,the `year` it was published, as well as a `SAVE` button. Note, the `headline` doubles as a `link` to the article hosted by the New York Times. On `click`, links will trigger the browser to open up and render the article in a new window.

* Revisit saved articles by following the `My Library` link at the top of the page. Saved articles are presented in the same format as they were originally presented.

..* Occasionally, articles from particulary 'dated' publications come with a PDF version of the newspaper the article was published in! 

### Behind the Scenes

* `New York Times Archive Explorer` is a fluid and responsive `React.js` single-page application which primarily interacts with the New York Times' `archive_api` to fetch and render article data. 

* The frontend is composed of unique `react-emotion` components, however, the form inputs or `TextFields`, the `AppBar`,as well as the `Grid` layout is borrowed from `Material-UI` -- a `React.js` library implementing Google's `Material Design`. 

* Saved articles are stored in a `MongoDB` database hosted in the cloud with Heroku's `mLab` and served via `express.js` routes. Notifications are triggered by `socket.io` events and presented in the form of `sweetAlert2` popups.

#### Technologies Listed

* [React.js](https://reactjs.org/)
* [React-Router-DOM](https://www.npmjs.com/package/react-router-dom)
* [NYT archive_api](https://developer.nytimes.com/)
* [Material-UI](https://material-ui.com/)
* [Material Design](https://material.io/design/)
* [MongoDB](https://www.mongodb.com)
* [mongoose.js](https://mongoosejs.com/)
* [socket.io](https://socket.io/)
* [sweetAlert2](https://sweetalert2.github.io/)

---




