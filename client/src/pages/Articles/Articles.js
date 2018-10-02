import React, { Component } from "react";
import API from "../../utils/API.js";
import MaterialGrid from "../../components/MaterialGrid";
import SearchForm from "../../components/SearchForm";
// import { Link } from "react-router-dom";

class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  // componentDidMount() {
  // this.loadResults();
  // }

  // loadResults = () => {

  // }

  // loadNewArticles = () => {
  //   API.loadNewArticles()
  //   then(res => 
  //     this.setState({articles: res.data, title: "", date: "", url: ""})
  //     )
  // }

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
        .then(res => { console.log(res) })

      // .then(response => {console.log(response)})
      //   .then(res => console.log(res))
      //   .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <MaterialGrid container justify="space-around">

          <MaterialGrid item lg={10} md={10} sm={10} xs={10}>
            <h2 style={{ marginLeft: 20, marginTop: 20 }}>Search Form</h2>
            <SearchForm
              topic={this.state.topic}
              startYear={this.state.startYear}
              endYear={this.state.endYear}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </MaterialGrid>

          <MaterialGrid item lg={10} md={10} sm={10} xs={10}>
            <h2>Results</h2>
          </MaterialGrid>

        </MaterialGrid>
      </div>
    );
  }
}

export default Articles;
