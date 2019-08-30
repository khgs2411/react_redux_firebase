import React from "react";
import moment from "moment";
import { Card, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const ProjectSummary = ({ project }) => {
  return (
    <Card
      border="light"
      bg="secondary"
      text="white"
      style={{ margin: "8px 0px" }}
    >
      <Card.Header as="h3">{project.title}</Card.Header>
      <Card.Body>
        <Card.Title as="h6">
          Posted by {project.authorFirstName} {project.authorLastName}
        </Card.Title>
        <Card.Text style={{ fontSize: "10px" }}>
          {moment(project.createdAt.toDate()).calendar()}
        </Card.Text>
        <Nav.Item>
          <Nav.Link as={NavLink} to={"/project/" + project.id} key={project.id}>
            View post
          </Nav.Link>
        </Nav.Item>
      </Card.Body>
    </Card>
  );
};
export default ProjectSummary;
