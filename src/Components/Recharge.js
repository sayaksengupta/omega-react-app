import React from "react";


function Recharge() {
  return (
    <>
      <br />
      <h5 className="dashheading">Recharge</h5>
      <br />
      <br />
      <ul className="dashtab">
        <li>
          <a href="#yearlytab" className="active">
            Yearly
          </a>
        </li>
        <li>
          <a href="#monthlytab">Monthly</a>
        </li>
        <li>
          <a href="#weeklytab">Weekly</a>
        </li>
        <li>
          <a href="#dailytab">Daily</a>
        </li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <div id="yearlytab" className="dashtabdiv" style={{ display: "block" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          &nbsp;&nbsp;&nbsp;
          <div
            className="generaldiv"
            style={{
              width: 100,
              height: 40,
              border: "1px solid",
              borderRadius: "5px 5px 5px 5px",
              padding: 10,
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src="assets/img/money.png"
                style={{ height: 25, width: 25 }}
              />
              &nbsp; 200
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div
            className="generaldiv"
            style={{
              width: 100,
              height: 40,
              border: "1px solid",
              borderRadius: "5px 5px 5px 5px",
              padding: 10,
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src="assets/img/money.png"
                style={{ height: 25, width: 25 }}
              />
              &nbsp; 250
            </div>
          </div>
        </div>
      </div>
      <div id="monthlytab" className="dashtabdiv" style={{ display: "none" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          &nbsp;&nbsp;&nbsp;
          <div
            className="generaldiv"
            style={{
              width: 100,
              height: 40,
              border: "1px solid",
              borderRadius: "5px 5px 5px 5px",
              padding: 10,
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src="assets/img/money.png"
                style={{ height: 25, width: 25 }}
              />
              &nbsp; 70
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div
            className="generaldiv"
            style={{
              width: 100,
              height: 40,
              border: "1px solid",
              borderRadius: "5px 5px 5px 5px",
              padding: 10,
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src="assets/img/money.png"
                style={{ height: 25, width: 25 }}
              />
              &nbsp; 100
            </div>
          </div>
        </div>
      </div>
      <div id="weeklytab" className="dashtabdiv" style={{ display: "none" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          &nbsp;&nbsp;&nbsp;
          <div
            className="generaldiv"
            style={{
              width: 100,
              height: 40,
              border: "1px solid",
              borderRadius: "5px 5px 5px 5px",
              padding: 10,
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src="assets/img/money.png"
                style={{ height: 25, width: 25 }}
              />
              &nbsp; 30
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div
            className="generaldiv"
            style={{
              width: 100,
              height: 40,
              border: "1px solid",
              borderRadius: "5px 5px 5px 5px",
              padding: 10,
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src="assets/img/money.png"
                style={{ height: 25, width: 25 }}
              />
              &nbsp; 60
            </div>
          </div>
        </div>
      </div>
      <div id="dailytab" className="dashtabdiv" style={{ display: "none" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          &nbsp;&nbsp;&nbsp;
          <div
            className="generaldiv"
            style={{
              width: 100,
              height: 40,
              border: "1px solid",
              borderRadius: "5px 5px 5px 5px",
              padding: 10,
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src="assets/img/money.png"
                style={{ height: 25, width: 25 }}
              />
              &nbsp; 10
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div
            className="generaldiv"
            style={{
              width: 100,
              height: 40,
              border: "1px solid",
              borderRadius: "5px 5px 5px 5px",
              padding: 10,
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src="assets/img/money.png"
                style={{ height: 25, width: 25 }}
              />
              &nbsp; 18
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="record" style={{ width: "60%", padding: "0.6%" }}>
        Recharge
      </div>
    </>
  );
}

export default Recharge;
