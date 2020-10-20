import React, { useState, useEffect } from "react";
import { getUserDetail, punchUserIn, punchUserOut } from "./ApiService";
import TimeEntry from "./TimeEntry";
import LoadingIndicator from "./LoadingIndicator";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [user, updateUser] = useState(null);
  const [isLoading, updateLoading] = useState(false);
  const [isPunching, updatePunching] = useState(false);

  useEffect(() => {
    updateLoading(true);
    getUserDetail(id)
      .then(updateUser)
      .finally(() => updateLoading(false));
  }, [id]);

  const handlePunchIn = () => {
    updatePunching(true);
    punchUserIn(id)
      .then(updateUser)
      .finally(() => updatePunching(false));
  };

  const handlePunchOut = () => {
    updatePunching(true);
    punchUserOut(user.activeEntry)
      .then(updateUser)
      .finally(() => updatePunching(false));
  };

  return (
    <div className="user-detail">
      {isLoading && <LoadingIndicator />}
      {user && (
        <>
          <div className="user-detail-header">
            <h1>
              {user.firstName} {user.lastName}
            </h1>
          </div>
          <ul>
            {user["time-entries"].length > 0 ? (
              user["time-entries"].map((entry) => (
                <TimeEntry key={entry.id} {...entry} />
              ))
            ) : (
              <li>No Time Entries</li>
            )}
          </ul>
          <div className="user-actions">
            {isPunching ? (
              <LoadingIndicator size={30} />
            ) : (
              <>
                {user.status === "away" && (
                  <button
                    className="button"
                    style={{ marginBottom: "1000px" }}
                    onClick={handlePunchIn}
                  >
                    Punch In
                  </button>
                )}
                {user.status === "active" && (
                  <button
                    className="button light-grey"
                    style={{ marginBottom: "1000px" }}
                    onClick={handlePunchOut}
                  >
                    Punch Out
                  </button>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetail;
