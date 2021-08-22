import React from "react";
import Navbar from "react-bootstrap/Navbar";
import icon from "../../Assets/icon.png";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        variant="dark"
        className="navbar-container"
      >
        <Navbar.Brand id="navbar-brand">
          <img src={icon} alt="logo-icon" className="logo-icon" />
          <span className="code-ocean">Code Ocean - Home exercise</span>
          <span className="by-shani">By Shani Yaron</span>
        </Navbar.Brand>
      </Navbar>
      <Navbar
        expand="lg"
        sticky="top"
        variant="dark"
        className="headings-container"
        style={{ justifyContent: "space-evenly" }}
      >
        <Navbar.Brand>
          <h1>Users</h1>
        </Navbar.Brand>
        <Navbar.Brand>
          <h1>Reviewers</h1>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default NavBar;
