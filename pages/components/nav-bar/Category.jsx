import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../redux/reducers/NavBar";

export const SearchCategory = (props) => {
    const dispatch = useDispatch();
    return <Dropdown.Item className="nav-bar-search-category" onClick={(e) => {
        dispatch(setSelectedCategory(e.target.innerText));
    }}>
        {props.label}
    </Dropdown.Item>
}