import React from "react";
import { Container } from "react-bootstrap";
import { NavBar } from "./nav-bar/NavBar";
import CustomerNavBar from './ordering/Details';
import { Quicklinks } from "./links/Quicklinks";
import { ProductCollections } from "./collection/Collections";
import { createClient } from "../../server/handlers/client";
import { ApolloProvider } from "react-apollo";

export const App = () => {
    return <ApolloProvider client={createClient()}>
        <Container id="app" fluid className="vh-100 vw-100 p-0">
            <Container id='top-nav' fluid>
                <CustomerNavBar />
                <NavBar />
                <Quicklinks />
                <ProductCollections />
            </Container>
        </Container>
    </ApolloProvider>
}