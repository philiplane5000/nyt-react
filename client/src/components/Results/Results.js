import React from 'react';
import styled from 'react-emotion';

const OuterWrapper = styled('div')(
    {
        border: '1px dashed white'
    }
)

const Title = styled('h2')(
    {
        fontSize: 24
    }
)

const Article = styled('div')(
    {
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
    }
)

const ArticleLink = styled('a')(
    {
        color: 'black'
    }
)

const Results = ({ articles }) => (
    <OuterWrapper>
        {articles.map(doc => (
            <Article>
                <Title><ArticleLink href={doc.web_url}>{doc.headline.main}</ArticleLink></Title>
                <p>Published in {doc.pub_date.slice(0, 4)}</p>
                <p>Type: {(doc.news_desk) ? doc.news_desk : "Archive"}</p>
            </Article>

        ))}
    </OuterWrapper>
)

export default Results;
