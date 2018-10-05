import React, { Component } from 'react';
import styled from 'react-emotion';
import API from '../../utils/API';
import openSocket from 'socket.io-client';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

//socket.io
const socket = openSocket('https://quiet-island-12161.herokuapp.com/');

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
        marginRight: 20,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        textTransform: 'capitalize'
    }
)

class Results extends Component {

    state = {
        saveArticles: [],
    }

    constructor(props) {
        super(props);
        this.sendSocketIO = this.sendSocketIO.bind(this);
    }

    sendSocketIO(headline) {
        return new Promise((resolve, reject) => {
            resolve(socket.emit('savedArticle', headline))
        })
    }

    handleSavedArticle = (_id, headline, url, pubDate) => {
        const articleData = { _id, headline, url, pubDate }
        API.saveArticle(articleData)
            .then(response => {
                console.log(response.status)
                this.sendSocketIO(headline)
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }


    componentDidMount() {
        socket.on('article', function (title) {
            console.log(`ARTICLE SAVED ID: ${title}`)
            //FIND ALTERNATE TO BELOW FOR ALERTING CLIENT:
            Swal({
                title: 'Article Saved!',
                text: `"${title}"`,
                type: 'success',
                confirmButtonText: 'Ok'
              })
        })
    }

    render() {
        const numRecords = this.props.num
        return (
            <div>
                <OuterWrapper>
                    {this.props.articles.map((doc, index) => {
                        return index < numRecords ?
                            <Article key={doc._id} id={doc._id}>
                                <ArticleContent>
                                    <Title><ArticleLink href={doc.web_url} target="_blank">{doc.headline.main}</ArticleLink></Title>
                                    <p>Published in {doc.pub_date.slice(0, 4)}</p>
                                    <p>Type: {(doc.news_desk) ? doc.news_desk : "Archive"}</p>
                                </ArticleContent>
                                <ButtonContainer>
                                    <Button onClick={() => this.handleSavedArticle(doc._id, doc.headline.main, doc.web_url, doc.pub_date.slice(0, 4))}>
                                        SAVE
                                    </Button>
                                </ButtonContainer>
                            </Article> : null
                    }
                    )}
                </OuterWrapper>
            </div>
        )
    }
}

export default Results;
