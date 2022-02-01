import React from "react";
import { Container } from "react-bootstrap";
import { QuicklinkItem } from "./QuicklinkItem";

export const Quicklinks = () => {
    return <Container id='quick-links' fluid>
        <QuicklinkItem img={"."} title="Delivery" desc="Free on orders over $100" />
        <QuicklinkItem img={"."} title="Returns" desc="Easy with original receipt" />
        <QuicklinkItem img={"."} title="Contact" desc="Talk to our team via chat!" />
        <QuicklinkItem img={"."} title="Shop!" desc="Finance interest-free today." />
    </Container>
}