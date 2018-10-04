import React, { Component } from 'react';
import API from '../../utils/API.js';
import MaterialGrid from '../../components/MaterialGrid/index.js';
import SearchForm from '../../components/SearchForm/SearchForm.js';
import ArticleBox from '../../components/ArticleBox';
import Results from '../../components/Results/index.js';

class Search extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: "",
    num: 10,
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

  handleSaveArticle = event => {
    event.preventDefault()

  }

  render() {
    return (
      <div>
        <MaterialGrid container spacing={24} justify="center" wrap='wrap'>

          <MaterialGrid item lg={9} md={9} sm={10} xs={12}>
          <ArticleBox header="Search the Archives" icon={<i class="fa fa-search" aria-hidden="true"></i>}>
            <SearchForm
              topic={this.state.topic}
              startYear={this.state.startYear}
              endYear={this.state.endYear}
              num={this.state.num}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </ArticleBox>
          </MaterialGrid>

          <MaterialGrid item lg={9} md={9} sm={10} xs={12} >

            <ArticleBox header="Results" icon={<i className="fa fa-newspaper-o"></i>}>
              <Results articles={this.state.articles} num={this.state.num} />
            </ArticleBox>

          </MaterialGrid>

        </MaterialGrid>
      </div>
    );
  }
}

export default Search;
