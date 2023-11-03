import React from "react";

function Premium() {
  return (
    <>
      <div className="open-icon d-block d-lg-none mx-0">
        <span onclick="openNav()" className="openbtn">
          <i className="fa-solid fa-bars-staggered" />
        </span>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="page_title">
            <h5 className="dashheading">Our Plans</h5>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="createPackagebox">
            <div className="mb-3">
              <img src="assets/img/premium.png" height={100} width={100} />
            </div>
            <div>
              <strong style={{ color: "red", fontSize: "24px" }}>
                Free Membership
              </strong>
            </div>
            <div className="Packagebox-text mb-4">
              <strong>
                Your free membership benifits are mentioned below:
              </strong>
            </div>
            <div className="mb-4">
              <div className="Packagebox-text">
                <img src="assets/img/yes.png" height={20} width={20} />
                Get more investors
              </div>
              <div className="Packagebox-text">
                <img src="assets/img/yes.png" height={20} width={20} />
                Add unlimited members of subscription plan no limitations
              </div>
              <div className="Packagebox-text">
                <img src="assets/img/cancel.png" height={20} width={20} />
                Create unlimited packages no limit
              </div>
              <div className="Packagebox-text">
                <img src="assets/img/cancel.png" height={20} width={20} />
                ASet package price more than $500 on all time frames
              </div>
            </div>
            <div>
              <p>
                Membership purchased on : 2023-03-16 <br />
                Membership expires on : 2024-03-16
              </p>
            </div>
            <div className="btn_sec">
              <a
                href
                className="btn btn-block btn-primary w-100 text-uppercase"
              >
                Subscribed
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="createPackagebox">
            <div className="mb-3">
              <img src="assets/img/premium.png" height={100} width={100} />
            </div>
            <div>
              <strong style={{ color: "red", fontSize: "24px" }}>
                Premium Membership
              </strong>
            </div>
            <div className="Packagebox-text mb-4">
              <strong>
                Your premium membership benifits are mentioned below:
              </strong>
            </div>
            <div className="mb-4">
              <div className="Packagebox-text">
                <img src="assets/img/yes.png" height={20} width={20} />
                Get more investors
              </div>
              <div className="Packagebox-text">
                <img src="assets/img/yes.png" height={20} width={20} />
                Add unlimited members of subscription plan no limitations
              </div>
              <div className="Packagebox-text">
                <img src="assets/img/yes.png" height={20} width={20} />
                Create unlimited packages no limit
              </div>
              <div className="Packagebox-text">
                <img src="assets/img/yes.png" height={20} width={20} />
                ASet package price more than $500 on all time frames
              </div>
            </div>
            <div>
              <p>
                Membership purchased on : 2023-03-16 <br />
                Membership expires on : 2024-03-16
              </p>
            </div>
            <div className="btn_sec">
              <a
                href
                className="btn btn-block btn-outline-primary w-100 text-uppercase"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Premium;
