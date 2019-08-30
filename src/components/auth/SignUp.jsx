import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Form, Container, Button } from "react-bootstrap";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      // <div>
      //   <div className="container">
      //     <form onSubmit={this.handleSubmit} className="white">
      //       <h5 className="grey-text text-darken-3">Sign Up</h5>
      //       <div className="input-field">
      //         <label htmlFor="email">Email</label>
      //         <input type="email" id="email" onChange={this.handleChange} />
      //       </div>
      //       <div className="input-field">
      //         <label htmlFor="password">Password</label>
      //         <input
      //           type="password"
      //           id="password"
      //           onChange={this.handleChange}
      //         />
      //       </div>
      //       <div className="input-field">
      //         <label htmlFor="lastName">Last Name</label>
      //         <input type="text" id="lastName" onChange={this.handleChange} />
      //       </div>
      //       <div className="input-field">
      //         <label htmlFor="firstName">First Name</label>
      //         <input type="text" id="firstName" onChange={this.handleChange} />
      //       </div>
      //       <div className="input-field">
      //         <button className="btn pink lighten-1 z-depth-0">Register</button>
      //         <div className="red-text center">
      //           {authError ? <p>{authError}</p> : null}
      //         </div>
      //       </div>
      //     </form>
      //   </div>
      // </div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="email"
            onChange={this.handleChange}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            id="firstName"
            onChange={this.handleChange}
            type="text"
            placeholder="First Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            id="lastName"
            onChange={this.handleChange}
            type="Text"
            placeholder="Last Name"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Signup
        </Button>
        <div className="red-text center">
          {authError ? <p>{authError}</p> : null}
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
