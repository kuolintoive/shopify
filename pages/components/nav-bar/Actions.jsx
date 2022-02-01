import React from "react";
import { Button, Container } from "react-bootstrap";

export const NavBarActions = () => {
    return <Container id="nav-bar-actions" fluid>
        <Button>
            <img src="https://cdn.shopify.com/s/files/1/0623/9030/5019/files/account.png?v=1643726876" alt="Login" />
        </Button>
        <Button>
            <img src="https://cdn.shopify.com/s/files/1/0623/9030/5019/files/checkout.png?v=1643727057" alt="Checkout" />
        </Button>
    </Container>
}