import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import StampingPlates from './StampingPlates';

export default function Main() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">
            Nail Art Resale
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/stampingPlates">
                Stamping Plates
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Nail Polish
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Nail Art Tools
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/stampingPlates">
            <StampingPlates />
          </Route>
          <Route path="/nailPolish">
            {/* <NailPolish /> */}
          </Route>
          <Route path="/nailArtTools">
            {/* <NailArtTools /> */}
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}