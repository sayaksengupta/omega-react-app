import React, { useState } from "react";
import { Link } from "react-router-dom";

function Notification() {
  const [selectedTab, setSelectedTab] = useState("general");
  return (
    <>
      <div className="open-icon d-block d-lg-none mx-0">
        <span onclick="openNav()" className="openbtn">
          <i className="fa-solid fa-bars-staggered" />
        </span>
      </div>
      <div className="createPackagebox">
        <h5 className="dashheading">Notifications</h5>
        <ul className="dashtab">
          <li>
            <Link
              to=""
              onClick={() => setSelectedTab("general")}
              className={selectedTab === "general" ? "active" : ""}
            >
              General
            </Link>
          </li>
          <li>
            <Link
              to=""
              onClick={() => setSelectedTab("requests")}
              className={selectedTab === "requests" ? "active" : ""}
            >
              Requests
            </Link>
          </li>
        </ul>
        {selectedTab === "general" && (
          <div
            id="generaltab"
            className="dashtabdiv"
            style={{ display: "block" }}
          >
            <p>No new notification arrived</p>
          </div>
        )}
        {selectedTab === "requests" && (
          <div
            id="requesttab"
            className="dashtabdiv"
            style={{ display: "block" }}
          >
            <p>No new notification arrived..</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Notification;
