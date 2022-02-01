import React from "react";
import { Container } from "react-bootstrap";

export const QuicklinkItem = (props) => {
    return <Container className="quick-link-item">
        <img src={props.img} alt="Image" />
        <Container className="quick-link-content">
            <p className="quick-link-item-title">{props.title}</p>
            <p className="quick-link-item-desc">{props.desc}</p>
        </Container>
    </Container>
}