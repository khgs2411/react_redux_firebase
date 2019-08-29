import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink className="btn-info btn-small" to="/create">
          New Project
        </NavLink>
      </li>
      <li>
        <a className="btn-info btn-small" onClick={props.signOut}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn-small btn-floating blue lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
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
