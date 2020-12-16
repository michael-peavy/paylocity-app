import React from "react";
import StatusIndicator from "./StatusIndicator";
import { Link } from "react-router-dom";

export const UserListItem = ({ firstName, lastName, company, status, id }) => {
  return (
    <div className='list00'>
    <div className='list' style={{ marginTop: "40px" }}>
      <li >
        <Link to={`/clock/user/${id}`}>
          <h3>
            <span>
              {firstName} {lastName}
            </span>
            <StatusIndicator status={status} />
          </h3>
          <div className="stats">
            <p> In By: 8:30am</p>
            <p> +12 E-Points</p>
          </div>

          <p className="stats2">Week 1</p>
        </Link>
      </li>
    </div>
    </div>
  );
};
