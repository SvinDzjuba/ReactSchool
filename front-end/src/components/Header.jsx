import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from '../assets/logo192.png';

function Header() {
    return (
        <header>
            <Navbar sticky="top" collapseOnSelect expand="md" bg="success" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} height="30" width="30" className="d-inline-block align-top" alt="Logo" />
                        ProjectSchool
                    </Navbar.Brand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/specialty">Specialties</Nav.Link>
                            <Nav.Link href="/profession">Manage Professions</Nav.Link>
                            <Nav.Link href="/department">Manage Departments</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link href="/logout">Logout</Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}
export default Header;