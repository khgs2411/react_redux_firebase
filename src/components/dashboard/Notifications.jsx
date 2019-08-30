import React from "react";
import moment from "moment";
import { Card, Toast, Spinner } from "react-bootstrap";

const Notifications = props => {
  const { notifications } = props;
  return (
    <React.Fragment>
      {notifications && notifications[0] ? (
        <Card.Title as="h6"></Card.Title>
      ) : (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <ul className="notifications">
        {notifications &&
          notifications.map(item => {
            return (
              <Toast key={item.id}>
                <img src="" className="rounded mr-2" alt="" />
                <strong className="mr-auto">{item.user}</strong>
                <Toast.Body>
                  {item.content} - {moment(item.time.toDate()).calendar()}
                </Toast.Body>
              </Toast>
            );
          })}
      </ul>
    </React.Fragment>
  );
};
export default Notifications;
