import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import NavBarSearch from "./Search";
import { NavBarActions } from "./Actions";
import Image from "next/image";


export const NavBar = () => {
    return <Navbar bg="light" expand="lg" id='top-nav-bar'>
        <Container fluid>
            <Container fluid id='top-nav-bar-start'>
                <img src="https://cdn.shopify.com/s/files/1/0623/9030/5019/files/hamburger.png?v=1643688740" alt="Menu" />
                <Navbar.Brand>STEMFinity</Navbar.Brand>
                <NavBarSearch />
            </Container>
            <NavBarActions />
        </Container>
  </Navbar>
}