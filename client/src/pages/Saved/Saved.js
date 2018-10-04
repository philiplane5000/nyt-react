import React, { Component } from "react";
import API from "../../utils/API";
import MaterialGrid from "../../components/MaterialGrid";
import ArticleBox from "../../components/ArticleBox";
import styled from "react-emotion";
// import { Link } from "react-router-dom";

const OuterWrapper = styled('div')(
    {
        margin: 20,
        borderRadius: 10,
        border: '1px dashed white',
        background: '#dce3e9'
    }
)

const Title = styled('h2')(
    {
        fontSize: 24
    }
)

const Article = styled('div')(
    {
        display: 'flex',
        justifyContent: 'space-between',
        borderTopStyle: 'double',
        borderBottomStyle: 'double',
        paddingTop: 10,
        paddingBottom: 10,
        borderTopColor: '#5972FF',
        borderBottomColor: '#5972FF',
        borderTopWidth: 8,
        borderBottomWidth: 8,
        margin: 40,
        paddingLeft: 20,
        background: 'white'
    }
)

const ArticleContent = styled('div')(
    {
        flex: 9
    }
)

const ArticleLink = styled('a')(
    {
        color: 'black'
    }
)

const ButtonContainer = styled('div')(
    {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    }
)

const Button = styled('button')(
    {
        background: '#dc3545',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        textTransform: 'capitalize'
    }
)

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
                this.setState({ articles: res.data })
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
            <MaterialGrid container justify="center">
                <MaterialGrid item lg={10} md={10} sm={12} xs={12}>
                <ArticleBox header="My Library">
                    <OuterWrapper>
                        {this.state.articles.map(article => (
                            <Article key={article._id} id={article._id}>
                                <ArticleContent>
                                    <Title><ArticleLink href={article.url} target="_blank">{article.headline}</ArticleLink></Title>
                                    <p>Published in {article.pubDate}</p>
                                </ArticleContent>
                            </Article>
                        ))}
                    </OuterWrapper>
                </ArticleBox>
                </MaterialGrid>
            </MaterialGrid>
        )
    }

}

export default Saved;