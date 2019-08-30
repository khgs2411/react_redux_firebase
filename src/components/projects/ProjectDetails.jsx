import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { Card, Spinner } from "react-bootstrap";

const ProjectDetails = props => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <Card className="text-center">
        <span style={{ fontSize: "8px" }}>{project.authorId}</span>
        <Card.Header>{project.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{project.content}</p>
            <footer className="blockquote-footer">
              Posted by{" "}
              <cite title="Source Title">
                {project.authorFirstName} {project.authorLastName}
              </cite>
              <br />
              {moment(project.createdAt.toDate()).calendar()}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    );
  } else {
    return <Spinner animation="border" role="status"></Spinner>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
