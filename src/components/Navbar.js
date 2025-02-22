import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img 
            src={logo} 
            alt="brand" 
            style={{ height: "65px", width: "50px", objectFit: "cover", borderRadius: "10px" }} 
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => updateExpanded(false)} 
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/about" 
                onClick={() => updateExpanded(false)} 
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/project" 
                onClick={() => updateExpanded(false)} 
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/resume" 
                onClick={() => updateExpanded(false)} 
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/muzamilchouhan"
                target="_blank"
                className="fork-btn-inner"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
