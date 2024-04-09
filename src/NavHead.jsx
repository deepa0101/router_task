import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

export default function NavHead(){
  return(
    <>
    <Container>
    <Navbar className="bg-body-tertiary navbar">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://akm-img-a-in.tosshub.com/lingo/itne/images/story/202206/guvi_logo.png?size=1200:675"
              width="100"
              height="40"
              className="d-inline-block align-center"
            />{' '}
            |BLOG
          </Navbar.Brand>
          <Nav className="me-auto">
          <Form inline>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            /></Form>
            </Nav>
          <Navbar.Text>
            Logout
          </Navbar.Text>
        
      </Navbar>
      </Container>
    </>
  )
}