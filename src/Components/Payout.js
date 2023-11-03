import React from "react";

function Payout() {
  return (
    <>
        <div className="open-icon d-block d-lg-none mx-0">
          <span onclick="openNav()" className="openbtn">
            <i className="fa-solid fa-bars-staggered" />
          </span>
        </div>
        <div className="createPackagebox">
          <h5 className="dashheading">Payout</h5>
          <div className="row">
            <div className="col-xs-8 position-relative">
              <div className="walletrefund">
                <p style={{ fontSize: "18px", padding: "0px" }}>
                  All Transactions
                </p>
                <u style={{ color: "aliceblue", width: "100%" }} />
                <div className="forheight" data-mcs-theme="dark">
                  <div className="refund">
                    <span className="dollerround">$</span>
                    <div className="refundstatus">
                      <h6>Pay in</h6>
                      <span>2 Months </span>
                    </div>
                    <span className="refundprice">+ $125</span>
                  </div>
                  <div className="refund dduction">
                    <span className="dollerround">$</span>
                    <div className="refundstatus">
                      <h6>Pay out</h6>
                      <span>1 Month </span>
                    </div>
                    <span className="refundprice">- $120</span>
                  </div>
                  <div className="refund dduction">
                    <span className="dollerround">$</span>
                    <div className="refundstatus">
                      <h6>Pay out</h6>
                      <span>1 Month </span>
                    </div>
                    <span className="refundprice">- $0</span>
                  </div>
                  <div className="refund dduction">
                    <span className="dollerround">$</span>
                    <div className="refundstatus">
                      <h6>Pay out</h6>
                      <span>10 Days </span>
                    </div>
                    <span className="refundprice">- $3963</span>
                  </div>
                  <div className="refund dduction">
                    <span className="dollerround">$</span>
                    <div className="refundstatus">
                      <h6>Pay out</h6>
                      <span>10 Days </span>
                    </div>
                    <span className="refundprice">- $0</span>
                  </div>
                  <div className="refund dduction">
                    <span className="dollerround">$</span>
                    <div className="refundstatus">
                      <h6>Pay out</h6>
                      <span>4 Hours </span>
                    </div>
                    <span className="refundprice">- $0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Payout;
