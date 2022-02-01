import React from "react";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import { connect } from "react-redux";
import { CurrencyItem } from "./CurrencyItem";

const mapStateToProps = (state) => {
    const { navBar } = state;
    return {
        currency: navBar.currency
    }
}

const CustomerNavBar = (props) => {
    return <Container id='customer-nav-bar' fluid>
        <a>Free shipping on all orders over $50.</a>
        <DropdownButton title={props.currency}>
            <CurrencyItem label="AUD $" />
            <CurrencyItem label="CAD $" />
        </DropdownButton>
    </Container>
}

export default connect(mapStateToProps)(CustomerNavBar);