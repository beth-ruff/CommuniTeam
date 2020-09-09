import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const NaviBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>CommuniTeam</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/categories">Categories</Nav.Link>
                <Nav.Link href="/events/new">Add an Event</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )}


  
export default NaviBar;