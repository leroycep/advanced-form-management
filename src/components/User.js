import React from "react";

function User(props) {
  return (
    <div className="User">
      <h2>{props.username}</h2>
      <ul>
        <li>id: {props.id}</li>
        <li>E-Mail: {props.email}</li>
        <li>Created: {props.createdAt}</li>
      </ul>
    </div>
  );
}

export default User;
