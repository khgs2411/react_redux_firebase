import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/signup">
          Signup
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/signin">
          Login
        </Nav.Link>
      </Nav.Item>
    </React.Fragment>
  );
};

export default SignedOutLinks;
