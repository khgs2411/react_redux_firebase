import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink className="btn btn-small" to="/signup">
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink className="btn btn-small" to="/signin">
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
