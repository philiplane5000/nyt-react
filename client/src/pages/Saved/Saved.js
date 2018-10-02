import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Saved extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        this.loadSavedArticles()
    }

    loadSavedArticles = () => {
        API.getSavedArticles()
            .then(res =>
                this.setState({ articles: res.data, title: "", date: "", url: "" })
            )
            .catch(err => console.log(err));
    };

    deleteSavedArticle = id => {
        API.deleteArticle(id)
            .then(res => this.loadSavedArticles())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>Saved</div>
        )
      }

}