import React from "react";

import { Link } from "react-router-dom";

function UserType() {
  return (
    <div>
      <div className="container" style={{ width: "850px", maxWidth: "95%" }}>
        <div className="row justify-content-center">
          <div
            className="blocknine"
            id="selection"
            style={{ display: "block" }}
          >
            <div className="modal-body text-center">
              {/* Project details*/}
              <img
                className="img-fluid d-block mx-auto mt-5"
                src="assets/img/logofooter.png"
                alt="..."
              />
              <h2 className="mb-5 mt-5">Select your category</h2>
              <div className="d-flex justify-content-between mb-4">
                <Link
                  to="/login?type=advisor"
                  className
                  data-bs-toggle="modal"
                  id="Advisor"
                >
                  <img
                    src="assets/img/omegabox01.png"
                    className="img-fluid minwidthcat"
                    alt="..."
                  />
                </Link>
                <Link
                  to="/login?type=investor"
                  className
                  data-bs-toggle="modal"
                  id="Investor"
                >
                  <img
                    src="assets/img/omegabox02.png"
                    className="img-fluid minwidthcat"
                    alt="..."
                  />
                </Link>
                <Link
                  to="/login?type=organisation"
                  className
                  data-bs-toggle="modal"
                  id="Organization"
                >
                  <img
                    src="assets/img/omegabox03.png"
                    className="img-fluid minwidthcat"
                    alt="..."
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* <div class="row justify-content-center"> */}
        </div>
      </div>
    </div>
  );
}

export default UserType;
