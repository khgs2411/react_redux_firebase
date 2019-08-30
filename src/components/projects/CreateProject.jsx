import React, { Component } from "react";
import { connect } from "react-redux";
import { createProjAction } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            id="title"
            onChange={this.handleChange}
            type="text"
            placeholder="Enter a title"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Content</Form.Label>
          <Form.Control
            id="content"
            onChange={this.handleChange}
            as="textarea"
            rows="3"
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit Post
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProjAction(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
