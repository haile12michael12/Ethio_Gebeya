import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";

const Navbarsection = () => {
  const Counterproducts = useSelector((store) => store.cart.cart);

  return (
    <Navbar className="nav border-bottom bg-white sticky-top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Bandage
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>

            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>

            <Link to="/cart" className="nav-link">
              <HiShoppingCart size={30} />
              <Badge bg="primary">{Counterproducts.length}</Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarsection;
