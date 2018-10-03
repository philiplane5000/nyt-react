import React, { Component } from "react";
import API from "../../utils/API.js";
import MaterialGrid from "../../components/MaterialGrid";
import SearchForm from "../../components/SearchForm/SearchForm";
import Results from "../../components/Results";
import HomeImage from "../../components/HomeImage";
// import { Link } from "react-router-dom";

class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: "",
    imgSrc: "https://qutech.nl/wp-content/uploads/2015/11/NYTimes-banner.jpg",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic || this.state.startYear || this.state.endYear) {
      // console.log(this.state)
      let queryURL = API.buildQueryURL({
        topic: this.state.topic,
        startYear: this.state.startYear,
        endYear: this.state.endYear
      })

      API.runNewSearch(queryURL)
        .then(res => { this.setState({ articles: res.data.response.docs }); console.log(this.state) })
        .catch(error => { console.log(error) })

    }
  };

  render() {
    return (
      <div>
        <MaterialGrid container spacing={24} justify="center" wrap='wrap'>

          <MaterialGrid item lg={6} md={6} sm={8} xs={10}>
            <SearchForm
              topic={this.state.topic}
              startYear={this.state.startYear}
              endYear={this.state.endYear}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </MaterialGrid>

          <MaterialGrid item lg={12} md={12} sm={12} xs={12} >

            <Results articles={this.state.articles} />

            <HomeImage imgSrc={ this.state.imgSrc ? this.state.imgSrc : "-"} />

          </MaterialGrid>

        </MaterialGrid>
      </div>
    );
  }
}

export default Articles;
