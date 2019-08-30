import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Nav, Button } from "react-bootstrap";

const SignedInLinks = props => {
  return (
    <React.Fragment>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/create">
          New Post
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={props.signOut}>Log out</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Button style={{ borderRadius: "50%" }} variant="secondary">
          {props.profile.initials}
        </Button>
      </Nav.Item>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
