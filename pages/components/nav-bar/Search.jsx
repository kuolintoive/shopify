import React from "react";
import { Container, DropdownButton, Button } from "react-bootstrap";
import { SearchCategory } from "./Category";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    const { navBar } = state;
    return {
        selectedCategory: navBar.category.selected
    }
}

const NavBarSearch = (props) => {
    return <Container id='nav-bar-search' fluid>
        <DropdownButton id="product-category" title={props.selectedCategory}>
            <SearchCategory label="Science" />
            <SearchCategory label="Tech" />
            <SearchCategory label="Robotics" />
            <SearchCategory label="Engineering" />
            <SearchCategory label="Arts" />
            <SearchCategory label="Math" />
        </DropdownButton>
        <input placeholder="Product" id='nav-bar-search-field' />
        <Button id='nav-bar-search-btn'>
            <img src="https://cdn.shopify.com/s/files/1/0623/9030/5019/files/search.png?v=1643726553" alt="Search" />
        </Button>
    </Container>
}

export default connect(mapStateToProps)(NavBarSearch);