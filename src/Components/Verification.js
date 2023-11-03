import React from "react";

function Verification() {
  return (
    <>
      <br />
      <h5 className="dashheading">Record verification</h5>
      <br />
      <br />
      <div>
        <div className="videoDiv">
          <img src="assets/img/monitor.png" />
          <video id="video-preview" autoPlay />
          <strong
            className="errmsg"
            id="notAllowed"
            style={{ display: "block" }}
          >
            Record permission not allowed <br /> refresh the page <br /> and
            allow permission
          </strong>
        </div>
        <button style={{ display: "none" }} id="stop-btn">
          Stop
        </button>
      </div>
      <div className="imagewithbtn">
        <img src="assets/img/record.png" height={20} width={20} />
        &nbsp; <strong id="timer"> 00:00</strong>
      </div>{" "}
      <br />
      <br />
      <div
        className="inputbg"
        style={{
          maxWidth: 500,
          height: 50,
          margin: "2px auto",
          background: "white",
        }}
      >
        <select name="licenseType">
          <option>Series 7 license</option>
          <option>Series 63 license</option>
          <option>Series 65 license</option>
          <option>Series others license</option>
        </select>
      </div>
      <br />
      <p
        id="licenseerr"
        style={{
          color: "red",
          fontSize: 10,
          textAlign: "center",
          margin: "auto",
        }}
      />
      <div className="inputbg" style={{ maxWidth: 500, margin: "2px auto" }}>
        <input
          id="license"
          name="license"
          type="text"
          placeholder="Enter your advisor's license number"
          style={{ textAlign: "center", background: "white" }}
        />
      </div>
      <button id="record-btn" className="record" disabled="true">
        <div className="imagewithbtn">
          <img src="assets/img/Camera.png" style={{ height: 20, width: 20 }} />{" "}
          &nbsp;<span id="record-text"> Record</span>
        </div>{" "}
      </button>
      <div
        style={{
          width: 200,
          height: 40,
          margin: "auto",
          border: "1px solid #000000",
          padding: "6px 10px 10px 10px",
          borderRadius: 5,
          textAlign: "center",
        }}
      >
        <a
          href="https://omega.5gsoftware.net/profile"
          style={{ textDecoration: "none" }}
        >
          Go back
        </a>
      </div>
      <br />
      <br />
      <strong style={{ fontSize: 16 }}>Please note</strong>
      <br />
      <br />
      <ul className="ulWarnings">
        <li>
          1. Make sure you have your license card physically in your hand to
          show in video
        </li>
        <br />
        <li>
          2. Video length is 20 seconds only , don't let yourself go out of
          camera view otherwise verification will be rejected
        </li>
        <br />
        <li>
          3. No one except you should come inside camera view while recording
        </li>
        <br />
        <li>
          4. Make sure your camera view is clear while recording, hazy or impure
          video condition will be marked as rejected
        </li>
      </ul>
    </>
  );
}

export default Verification;
