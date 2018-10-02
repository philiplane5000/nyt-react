import React from 'react';
import styled from 'react-emotion';

const Image = styled('div')(
    {
        marginRight: 40,
        height: 400,
        backgroundSize: 'cover',
        backgroundClip: 'content-box',
        padding: 10,
        borderRadius: 10,
        border: '1px solid rgba(0,0,0,0.9)',
        boxShadow: '4px 4px 5px rgba(0,0,0,0.4)'
    }
)

const HomeImage = props => (
    <Image style={{backgroundImage: `url("${props.imgSrc}")`}}>
    </Image>
)

export default HomeImage;