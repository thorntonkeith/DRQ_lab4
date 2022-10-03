import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/read">Read</Nav.Link>
                            <Nav.Link href="/create">Create</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}