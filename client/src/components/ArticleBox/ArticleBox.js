import React from "react";
import styled from "react-emotion";

const ArticleWrapper = styled('div') (
    {
        margin: '0 auto',
        border: '5px solid #3f51b5',
        borderRadius: 5
    }
)

const Header = styled ('h1') (
    {
        color: 'white',
        fontSize: 28,
        padding: 10,
        background: '#3f51b5',
        lineHeight: '35px'
    }
)

const ArticleBox = (props) => {
    return (
    <ArticleWrapper>
        <Header>&nbsp;{props.icon}&nbsp;&nbsp;{props.header}</Header>
        {props.children}
    </ArticleWrapper>
    )
}


export default ArticleBox;