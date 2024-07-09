import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const NavbarComponent = () => {
  // const adminIsthere = if()

  // if () {
  //   console.log(JSON.parse(localStorage.getItem("AdminData")).email);
  // }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className="  fw-semibold fs-3">
          طرحه
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>

          <div className=" flex justify-center">
            <div className="fs-4 cursor-pointer ">
              <a href="/cart">
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>

                <p className=" d-inline ms-1">Cart</p>
              </a>
            </div>
            <div>
              {JSON.parse(localStorage.getItem("AdminData")) != null &&
              JSON.parse(localStorage.getItem("AdminData")).email ? (
                <a href="/admin/addproduct">
                  <Button className="  bg-transparent text-zinc-900 border-zinc-900 hover:text-purple-500 mx-2">
                    Admin
                  </Button>
                </a>
              ) : null}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
