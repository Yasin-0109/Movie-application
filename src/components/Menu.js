import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Bootstrap navigation menu

const Menu = () => {
  return (
    <div>
     <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" style={{color: 'red'}}>Browse</Nav.Link>
            <Nav.Link href="/wishlist">Wishlist</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    </div>
  );
};

export default Menu;