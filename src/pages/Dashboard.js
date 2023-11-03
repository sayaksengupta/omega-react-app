import React, { useEffect, useState } from "react";
import "../css/home.css";
import "../css/extra.css";
import "../css/aos.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../css/dashboard.css";
import Members from "../Components/Members";
import MemberDetails from "../Components/MemberDetails";
import Profile from "../Components/Profile";
import Notification from "../Components/Notification";
import Payout from "../Components/Payout";
import Premium from "../Components/Premium";
import Wallet from "./Wallet";
import AddPackage from "../Components/AddPackage";
import AddBank from "../Components/AddBank";
import Orders from "../Components/Orders";
import OrderDetails from "../Components/OrderDetails";
import EditPackage from "../Components/EditPackage";
import Recharge from "../Components/Recharge";
import Verification from "../Components/Verification";

function Dashboard() {
  const token = localStorage.getItem("token");
  const Type = localStorage.getItem("TYPE");

  const navigate = useNavigate();

  const [selectedNav, setSelectedNav] = useState("dashboard");

  const [selectedTab, setSelectedTab] = useState("home-tab");

  const [user, setUser] = useState("");

  const [selectedMember, setSelectedMember] = useState("");

  const [isLinkModalOpen, setLinkModalOpen] = useState(false);
  const [isIntroModalOpen, setIntroModalOpen] = useState(false);
  const [isInvestModalOpen, setInvestModalOpen] = useState(false);
  const [isOfferModalOpen, setOfferModalOpen] = useState(false);

  console.log(Type);

  console.log(selectedNav);

  const getUser = async () => {
    await axios
      .get(`http://localhost:8080/${Type}/get-${Type}`, {
        headers: { token: token },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };

  const logout = async (e) => {
    e.preventDefault();
    await axios
      .get(`http://localhost:8080/${Type}/logout`, {
        headers: { token: token },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.clear();
        navigate("/");
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };

  useEffect(() => {
    if (Type) {
      getUser();
    }
  }, [Type]);

  return (
    <>
      {token ? (
        <>
          <Navbar />
          <div className="dashboardwrap">
            {/* Modal pop  */}
            <div id="myModalAddLink" className="modal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      Add link of your website or Portfolio
                    </h5>
                  </div>
                  <form
                    id="linkForm"
                    action="http://omega.5gsoftware.net/changelink"
                    method="post"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="IzkzRolu8TPVKVtgdP63DE9EItvNzAvm3tpWDfxw"
                    />
                    <div className="modal-body">
                      <div className="inputbg">
                        <input
                          type="text"
                          placeholder="Enter link address"
                          id="link"
                          name="link"
                          defaultValue={user.portfolio}
                        />
                        <p
                          id="linkerr"
                          style={{
                            color: "red",
                            fontSize: "10px",
                            textAlign: "left",
                          }}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        id="cancelLinkModal"
                        className="buttonnonselected"
                        style={{ width: "100px" }}
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        id="linkSubmit"
                        className="buttonselected"
                        style={{ width: "200px", border: "1px solid #d8330e" }}
                      >
                        Save changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div id="myModalAddIntro" className="modal">
              <div className="modal-dialog">
                <div className="modal_title">
                  <h5>Add something about you</h5>
                </div>
                <div className="modal-content">
                  <form action>
                    <div className="new_form_mdl">
                      <div>
                        <label htmlFor>Video URL</label>
                        <input type="text" placeholder="xyz.com/example.mp4" />
                      </div>
                      <div>
                        <label htmlFor>Sample Select</label>
                        <select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                      <label htmlFor>Enter your introduction</label>
                      <textarea
                        name
                        id
                        cols={30}
                        rows={5}
                        placeholder="Enter your introduction"
                        defaultValue={""}
                      />
                      <div className="btns">
                        <button
                          type="button"
                          className="buttonnonselected"
                          style={{ width: "130px" }}
                          id="cancelIntroModal"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          id="introSubmit"
                          className="buttonselected"
                          style={{
                            width: "130px",
                            border: "1px solid #d8330e",
                          }}
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div id="myModalAddInvest" className="modal">
              <div className="modal-dialog">
                <div className="modal_title">
                  <h5>Add your investment plan</h5>
                </div>
                <div className="modal-content">
                  <form action>
                    <div className="new_form_mdl">
                      <div>
                        <label htmlFor>Video URL</label>
                        <input type="text" placeholder="xyz.com/example.mp4" />
                      </div>
                      <div>
                        <label htmlFor>Select your investment type</label>
                        <select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                      <label htmlFor>Enter your investment benifits</label>
                      <textarea
                        name
                        id
                        cols={30}
                        rows={5}
                        placeholder="Enter your introduction"
                        defaultValue={""}
                      />
                      <div className="btns">
                        <button
                          type="button"
                          className="buttonnonselected"
                          style={{ width: "130px" }}
                          id="cancelIntroModal"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          id="introSubmit"
                          className="buttonselected"
                          style={{
                            width: "130px",
                            border: "1px solid #d8330e",
                          }}
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div id="myModalAddOffer" className="modal">
              <div className="modal-dialog">
                <div className="modal_title">
                  <h5>Add your investment plan</h5>
                </div>
                <div className="modal-content">
                  <form action>
                    <div className="new_form_mdl">
                      <div>
                        <label htmlFor="fristname dashlabel">
                          Select your offer for investment
                        </label>
                        <select name="offerType" className="form-select">
                          <option value="Marketing" selected>
                            Marketing
                          </option>
                          <option value="Sales">Sales</option>
                          <option value="Technology">Technology</option>
                          <option value="Logistics">Logistics</option>
                          <option value="Online Marketplace">
                            Online Marketplace
                          </option>
                          <option value="Offline Retail">Offline Retail</option>
                          <option value="Food Chain Business">
                            Food Chain Business
                          </option>
                          <option value="Banking Sectors">
                            Banking Sectors
                          </option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="fristname dashlabel">
                          Enter your investment title
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your investment title"
                          id="offerTitle"
                          name="title"
                          defaultValue
                        />
                        <p
                          id="offertitleerr"
                          style={{
                            color: "red",
                            fontSize: "10px",
                            textAlign: "left",
                            marginBottom: 0,
                          }}
                        />
                      </div>
                      <div>
                        <label htmlFor="fristname dashlabel">
                          Enter your investment benifits
                        </label>
                        <textarea
                          className="textar"
                          placeholder
                          id="offer"
                          name="offer"
                          value
                          cols={30}
                          rows={5}
                          defaultValue={""}
                        />
                        <p
                          id="offererr"
                          style={{
                            color: "red",
                            fontSize: "10px",
                            textAlign: "left",
                            marginBottom: 0,
                          }}
                        />
                      </div>
                      <div className="btns">
                        <button
                          type="button"
                          className="buttonnonselected"
                          style={{ width: "130px" }}
                          id="cancelOfferModal"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          id="offerSubmit"
                          className="buttonselected"
                          style={{
                            width: "130px",
                            border: "1px solid #d8330e",
                          }}
                        >
                          Create Offer
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* end modal pop */}
            <div className="leftdash">
              <a href="#" className="leftslideicon">
                <img
                  src="assets/img/lefticon.png"
                  className="img-fluid"
                  alt="..."
                />
              </a>
              <div className="text-center">
                <a className="navbar-brand" href="home.html">
                  <img
                    src="http://omega.5gsoftware.net/assets/img/logomain.png"
                    className="img-fluid"
                    alt="..."
                  />
                </a>
              </div>
              <ul className="dahsmainmenu">
                <li>
                  <Link
                    onClick={() => setSelectedNav("dashboard")}
                    to="/dashboard"
                    id="dashboard"
                    className={selectedNav === "dashboard" ? "active" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M120-840h320v320H120v-320Zm80 80v160-160Zm320-80h320v320H520v-320Zm80 80v160-160ZM120-440h320v320H120v-320Zm80 80v160-160Zm440-80h80v120h120v80H720v120h-80v-120H520v-80h120v-120Zm-40-320v160h160v-160H600Zm-400 0v160h160v-160H200Zm0 400v160h160v-160H200Z" />
                    </svg>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    onClick={() => setSelectedNav("profile")}
                    id="profile"
                    className={selectedNav === "profile" ? "active" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                    </svg>
                    Profile
                  </Link>
                </li>
                {Type === "organisation" && (
                  <li>
                    <Link
                      to=""
                      onClick={() => setSelectedNav("members")}
                      id="manage_employee"
                      className={selectedNav === "members" ? "active" : ""}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={24}
                        viewBox="0 -960 960 960"
                        width={24}
                      >
                        <path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z" />
                      </svg>
                      Manage Employees
                    </Link>
                  </li>
                )}
                {Type === "advisor" && (
                  <li>
                    <a id="manage">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={24}
                        viewBox="0 -960 960 960"
                        width={24}
                      >
                        <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm0-80q-25 0-42.5-17.5T422-480q0-25 17.5-42.5T482-540q25 0 42.5 17.5T542-480q0 25-17.5 42.5T482-420Zm-2-60Zm-40 320h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Z" />
                      </svg>
                      Manage Packages
                    </a>
                    <ul style={{ listStyle: "none", paddingLeft: "0.6rem" }}>
                      <li>
                        <Link
                          to=""
                          onClick={() => setSelectedNav("add-package")}
                          style={{ fontSize: "14px", marginLeft: "20px" }}
                          id="create_package"
                          className={
                            selectedNav === "add-package" ? "active" : ""
                          }
                        >
                          Create Package
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          onClick={() => setSelectedNav("edit-package")}
                          style={{ fontSize: "14px", marginLeft: "20px" }}
                          id="edit_package"
                          className={
                            selectedNav === "edit-package" ? "active" : ""
                          }
                        >
                          Edit Package
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
                <li>
                  <Link
                    onClick={() => setSelectedNav("wallet")}
                    to=""
                    id="wallet"
                    className={selectedNav === "wallet" ? "active" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M640-420q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Z" />
                    </svg>
                    Wallet / Bank details
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setSelectedNav("orders")}
                    to=""
                    id="orders"
                    className={selectedNav === "orders" ? "active" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" />
                    </svg>
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setSelectedNav("payout")}
                    to=""
                    id="payout"
                    className={selectedNav === "payout" ? "active" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" />
                    </svg>
                    Payouts
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setSelectedNav("notification")}
                    to=""
                    id="notification"
                    className={selectedNav === "notification" ? "active" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                    </svg>
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" id="contact_us">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44v23ZM720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80Zm0-80v-446L526-800H240v640h480Zm-480 0v-640 640Z" />
                    </svg>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setSelectedNav("premium")}
                    to=""
                    id="premium"
                    className={selectedNav === "premium" ? "active" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                    </svg>
                    Premium
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M280-240q-17 0-28.5-11.5T240-280v-80h520v-360h80q17 0 28.5 11.5T880-680v600L720-240H280ZM80-280v-560q0-17 11.5-28.5T120-880h520q17 0 28.5 11.5T680-840v360q0 17-11.5 28.5T640-440H240L80-280Zm520-240v-280H160v325l46-45h394Zm-440 0v-280 280Z" />
                    </svg>
                    Chat
                  </a>
                </li>
                <li>
                  <Link onClick={logout} to="" id="logout">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                    </svg>
                    Logout
                  </Link>
                </li>
              </ul>
              <div className="ad-box">
                <strong>Want to see your profile on top?</strong> <br />
                <div style={{ display: "flex" }}>
                  &nbsp;
                  <img
                    src="assets/img/premium.png"
                    style={{ height: "20px", width: "20px" }}
                  />
                  <p style={{ fontSize: "13px" }}>
                    Check out our promotion feature and met many exciting offers
                  </p>
                </div>
                <div className="record">
                  <Link to="" onClick={() => setSelectedNav("recharge")}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            {/* end of leftdash */}
            <div id="mySidenav_sc" className="sidenav">
              <a
                href="javascript:void(0)"
                className="closebtn"
                onclick="closeNav()"
              >
                ×
              </a>
              <ul>
                <li>
                  <a href="dashboard.html" id="dashboard">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M120-840h320v320H120v-320Zm80 80v160-160Zm320-80h320v320H520v-320Zm80 80v160-160ZM120-440h320v320H120v-320Zm80 80v160-160Zm440-80h80v120h120v80H720v120h-80v-120H520v-80h120v-120Zm-40-320v160h160v-160H600Zm-400 0v160h160v-160H200Zm0 400v160h160v-160H200Z" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <Link
                    to=""
                    id="profile"
                    onClick={() => setSelectedNav("profile")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                    </svg>
                    Profile
                  </Link>
                </li>
                <li>
                  <a href="manage-employee.html" id="manage_employee">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z" />
                    </svg>
                    Manage Employess
                  </a>
                </li>
                <li>
                  <a id="manage">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm0-80q-25 0-42.5-17.5T422-480q0-25 17.5-42.5T482-540q25 0 42.5 17.5T542-480q0 25-17.5 42.5T482-420Zm-2-60Zm-40 320h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Z" />
                    </svg>
                    Manage
                  </a>
                  <ul style={{ listStyle: "none", paddingLeft: "0.6rem" }}>
                    <li>
                      <a
                        href="create-package.html"
                        style={{ fontSize: "14px", marginLeft: "20px" }}
                        id="create_package"
                      >
                        Create Package
                      </a>
                    </li>
                    <li>
                      <a
                        href="edit-package.html"
                        style={{ fontSize: "14px", marginLeft: "20px" }}
                        id="edit_package"
                      >
                        Edit Package
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="wallet.html" id="wallet">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M640-420q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Z" />
                    </svg>
                    Wallet / Bank details
                  </a>
                </li>
                <li>
                  <a href="payout.html" id="payout">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" />
                    </svg>
                    Payouts
                  </a>
                </li>
                <li>
                  <a href="notifications.html" id="notification">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                    </svg>
                    Notifications
                  </a>
                </li>
                <li>
                  <a href="contact.html" id="contact_us">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44v23ZM720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80Zm0-80v-446L526-800H240v640h480Zm-480 0v-640 640Z" />
                    </svg>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="premium.html" id="premium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                    </svg>
                    Premium
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M280-240q-17 0-28.5-11.5T240-280v-80h520v-360h80q17 0 28.5 11.5T880-680v600L720-240H280ZM80-280v-560q0-17 11.5-28.5T120-880h520q17 0 28.5 11.5T680-840v360q0 17-11.5 28.5T640-440H240L80-280Zm520-240v-280H160v325l46-45h394Zm-440 0v-280 280Z" />
                    </svg>
                    Chat
                  </a>
                </li>
                <li>
                  <a href="/home.html" id="logout">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                    </svg>
                    Logout
                  </a>
                </li>
              </ul>
            </div>

            <div className="rightdash">
              {selectedNav === "dashboard" ? (
                <>
                  <div className="open-icon d-block d-lg-none mx-0">
                    <span onclick="openNav()" className="openbtn">
                      <i className="fa-solid fa-bars-staggered" />
                    </span>
                  </div>
                  <div className="coverdiv">
                    <img
                      src="assets/img/1cover.png"
                      className="img-fluid"
                      id="output"
                      alt="..."
                    />
                    <div className="setcoverbtn">
                      <form
                        method="post"
                        action="/updateProfilePicture"
                        encType="multipart/form-data"
                        id="coverPictureForm"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          defaultValue="IzkzRolu8TPVKVtgdP63DE9EItvNzAvm3tpWDfxw"
                        />
                        <input
                          type="file"
                          id="coverImg"
                          className="uploadbtn"
                          name="imagePrf"
                          accept="image/*"
                        />
                        <input type="hidden" name="id" defaultValue={1} />
                        <input type="hidden" name="type" defaultValue="cover" />
                      </form>
                    </div>
                  </div>
                  <form
                    method="post"
                    action="/updateProfilePicture"
                    encType="multipart/form-data"
                    id="profilePictureForm"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="IzkzRolu8TPVKVtgdP63DE9EItvNzAvm3tpWDfxw"
                    />
                    <div className="profileimg">
                      <img
                        src="assets/img/1.png"
                        className="img-fluid changeprofile"
                        id="changeprofile"
                        alt="..."
                      />
                      <input
                        type="file"
                        id="prfImage"
                        name="imagePrf"
                        className="uploadprofile"
                        accept="image/*"
                        onchange="loadproFile(event)"
                      />
                      <input
                        id="identity"
                        type="hidden"
                        name="id"
                        defaultValue={1}
                      />
                      <input type="hidden" name="type" defaultValue="profile" />
                    </div>
                    <div
                      style={{
                        display: "none",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                      id="prfUpdateBtn"
                    >
                      <input
                        type="submit"
                        className="btn btn-info"
                        defaultValue="Save"
                      />
                    </div>
                  </form>
                  <div className="userinfo2">
                    <h4>{user.name}</h4>
                    {user.portfolio && (
                      <p
                        id="myBtn"
                        data-toggle="modal"
                        data-target="#myModalAddLink"
                      >
                        <img
                          src="assets/img/link_icon.png"
                          className="img-fluid"
                          alt="..."
                          style={{ height: "15px" }}
                        />
                        {user.portfolio}
                      </p>
                    )}
                    <div className="spanWarning-full">
                      Your license verification status is{" "}
                      <span className="spanWarning">pending</span>
                    </div>
                  </div>
                  <ul className="dashtab">
                    <li>
                      <Link
                        onClick={() => setSelectedTab("home-tab")}
                        to=""
                        className={selectedTab === "home-tab" ? "active" : ""}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setSelectedTab("about-tab")}
                        to=""
                        className={selectedTab === "about-tab" ? "active" : ""}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <a href="#chatab">Chat</a>
                    </li>
                  </ul>
                  {selectedTab === "home-tab" ? (
                    <div
                      id="hometab"
                      className="dashtabdiv"
                      style={{ display: "block", margin: "10px" }}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="hometabinfos">
                            <img
                              src="assets/img/reshot-illustration-website-development-5QS97CJH2A-15fb1.png"
                              className="img-fluid"
                              alt="..."
                            />
                            <h5>Introduce Yourself</h5>
                            <p>
                              Help People coming to your page get to know you.
                            </p>
                            <a
                              id="addDetails"
                              data-toggle="modal"
                              data-target="#myModalAddIntro"
                              class="portfolio-link"
                            >
                              Add Detail
                            </a>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="hometabinfos">
                            <img
                              src="assets/img/reshot-illustration-website-design-team-8Q23497FBW.png"
                              className="img-fluid"
                              alt="..."
                            />
                            <h5>Choose what to offer</h5>
                            <p>Choose what you want to offer to your clients</p>
                            <a
                              id="addOfferPlan"
                              data-toggle="modal"
                              data-target="#myModalAddInvest"
                              className="portfolio-link"
                            >
                              Set Up Benifits
                            </a>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="hometabinfos">
                            <img
                              src="assets/img/reshot-illustration-website-design-team-K5VSWPFRC7.png"
                              className="img-fluid"
                              alt="..."
                            />
                            <h5>Create your package</h5>
                            <p>Create packages to sell</p>
                            <Link
                              to=""
                              className="portfolio-link"
                              onClick={() => setSelectedNav("add-package")}
                            >
                              Create Package
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : selectedTab === "about-tab" ? (
                    <div
                      id="aboutab"
                      className="dashtabdiv"
                      style={{ display: "block", margin: "10px" }}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="hometabinfos">
                            <img
                              src="assets/img/reshot-illustration-website-development-5QS97CJH2A-15fb1.png"
                              className="img-fluid"
                              alt="..."
                            />
                            <h5>Investment Offers</h5>
                            <h4>Rion</h4>
                            <h6>Marketing</h6>
                            <p>Axon</p>
                            <a
                              href="/removeOffer?token=MGVGf5j0jM12"
                              className="portfolio-link"
                            >
                              Remove Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div id="managetab" className="dashtabdiv">
                    <div
                      className="d-flex hometabinfos"
                      style={{ width: "100%" }}
                    >
                      <div className="consulteecont" style={{ width: "100%" }}>
                        <h5 style={{ textAlign: "center" }}>
                          No approved employee
                        </h5>
                      </div>
                    </div>
                  </div>
                </>
              ) : selectedNav === "memberDetails" ? (
                <>
                  <MemberDetails selectedMember={selectedMember} />
                </>
              ) : selectedNav === "members" ? (
                <>
                  <Members
                    allMembers={user.members}
                    setSelectedNav={setSelectedNav}
                    setSelectedMember={setSelectedMember}
                  />
                </>
              ) : selectedNav === "profile" ? (
                <Profile user={user} setSelectedNav={setSelectedNav} />
              ) : selectedNav === "verify" ? (
                <Verification />
              ) : selectedNav === "notification" ? (
                <Notification />
              ) : selectedNav === "payout" ? (
                <Payout />
              ) : selectedNav === "premium" ? (
                <Premium />
              ) : selectedNav === "wallet" ? (
                <Wallet setSelectedNav={setSelectedNav} />
              ) : selectedNav === "add-package" ? (
                <AddPackage />
              ) : selectedNav === "edit-package" ? (
                <EditPackage />
              ) : selectedNav === "recharge" ? (
                <Recharge />
              ) : selectedNav === "add-bank" ? (
                <AddBank setSelectedNav={setSelectedNav} />
              ) : selectedNav === "orders" ? (
                <Orders setSelectedNav={setSelectedNav} />
              ) : selectedNav === "order-details" ? (
                <OrderDetails setSelectedNav={setSelectedNav} />
              ) : null}
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Dashboard;
