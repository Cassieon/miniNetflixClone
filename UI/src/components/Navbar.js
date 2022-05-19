import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavBar extends React.Component {
    
    render() {
        return (
            <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#name">Netflix</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#shows">TV Shows</Nav.Link>
                        <Nav.Link href="#movies">Movies</Nav.Link>
                        <Nav.Link href="#recents">Recently Added</Nav.Link>
                        <Nav.Link href="#mylist">My List</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            </div>
        
        );
    }
};

export default NavBar;