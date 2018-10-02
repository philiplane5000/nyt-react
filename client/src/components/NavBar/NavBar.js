import React from "react";
import { Link } from "react-router-dom"
import AppBar from "@material-ui/core/AppBar";
import styled from "react-emotion";

const Title = styled('h1')(
    {
        textAlign: 'center',
        color: 'white',
        padding: 15,
        fontSize: '3.2rem'
    }
)

const LinksWrapper = styled('div')(
    {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: 10,
        color: 'white'
    }
)

const LinkItem = styled('p')(
    {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.4rem',
        padding: 10,
    }

)

const NavBar = () => {
    return (
        <AppBar position="static" style={{marginBottom: 40}}>
            <Title>
                New York Times Archive Explorer
        </Title>
            <LinksWrapper>
                <Link to="/"><LinkItem>Home</LinkItem></Link>
                <Link to="/saved"><LinkItem>My Library</LinkItem></Link>
            </LinksWrapper>
        </AppBar>
    )
}

export default NavBar;



// export default NavBar;
