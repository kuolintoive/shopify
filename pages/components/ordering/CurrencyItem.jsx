import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrency } from "../../redux/reducers/NavBar";

export const CurrencyItem = (props) => {
    const dispatch = useDispatch();
    return <Dropdown.Item className="customer-nav-currency-item" onClick={(e) => {
        dispatch(setCurrency(e.target.innerText));
    }}>
        {props.label}
    </Dropdown.Item>
}