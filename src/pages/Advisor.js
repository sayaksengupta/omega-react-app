import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../css/advisor.css";

function Advisor() {
  return (
    <>
      <Navbar />
      <div className="container main-box mt-5">
        <div className="row">
          <h4 className="mt-4 mb-3 mytrading">
            Trading
            <span>Get expert insights into what you should buy and sell.</span>
          </h4>
          <hr />
          {/* sidebar start */}
          <div className="col-md-2 mysidebar">
            <h6 className="mb-3">Categories</h6>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check1"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check1">
                Crypto
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check2"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check2">
                General
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check3"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check3">
                Investing
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check4"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check4">
                NFTs
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check5"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check5">
                Stocks
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check6"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check6">
                Technical Analysis
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check7"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check7">
                Trading Indicators
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check8"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check8">
                Other
              </label>
              <span>23</span>
            </div>
            <hr style={{ width: "90%" }} />
            <h6 className="mb-3 mt-4">What's included</h6>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check9"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check9">
                Content
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check10"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check10">
                Courses
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check11"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check11">
                Discord
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check12"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check12">
                File
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check13"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check13">
                Software
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check14"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check14">
                Telegram
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check15"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check15">
                Trading View
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check16"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check16">
                Other
              </label>
              <span>23</span>
            </div>
            <hr style={{ width: "90%" }} />
            <h6 className="mb-3 mt-4">Price</h6>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check17"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check17">
                Free Trial
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check18"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check18">
                Under $25
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check19"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check19">
                $25 to $50
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check20"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check20">
                $50 to $100
              </label>
              <span>23</span>
            </div>
            <div className="form-check category">
              <input
                type="checkbox"
                className="form-check-input"
                id="check21"
                name="option2"
                defaultValue="something"
              />
              <label className="form-check-label" htmlFor="check21">
                $100 to over
              </label>
              <span>23</span>
            </div>
          </div>
          {/* sidebar End */}
          {/* Main Cards start */}
          <div className="col-md-10 card-box">
            <div className="row">
              <div className="col-6">109 products</div>
              <div className="col-6 d-flex justify-content-end align-items-center">
                <span className="sort-pc d-none d-md-b;ock"> Sort By</span>
                <select className="best-select">
                  <option selected>Best Sellers</option>
                  <option value={1}> Price: Low to High</option>
                  <option value={2}> Price: High to Low</option>
                  <option value={3}> Highest Rated</option>
                  <option value={3}> Newest Arrivals</option>
                </select>
                <div className="d-lg-none d-md-none d-block">
                  <div className="text-whop-black hover:bg-whop-hover flex cursor-pointer select-none items-center gap-1.5 rounded px-2 py-1 transition md:hidden">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="sliders"
                      className="svg-inline--fa fa-sliders text-[14px]"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M0 416c0 13.3 10.7 24 24 24l59.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 440c13.3 0 24-10.7 24-24s-10.7-24-24-24l-251.7 0c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56L24 392c-13.3 0-24 10.7-24 24zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-35.8 0-66.1 23.5-76.3 56L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l251.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56l59.7 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-59.7 0c-10.2-32.5-40.5-56-76.3-56zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm76.3-56C258.1 39.5 227.8 16 192 16s-66.1 23.5-76.3 56L24 72C10.7 72 0 82.7 0 96s10.7 24 24 24l91.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 120c13.3 0 24-10.7 24-24s-10.7-24-24-24L268.3 72z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row mt-4 my-box-hover"
              onclick="window.location.href='package.html'"
            >
              <div className="col-md-3">
                <img
                  src="https://assets.whop.com/cdn-cgi/image/width=640/https://assets.whop.com/images/images/39266.original.jpeg?1687193107"
                  style={{ borderRadius: "4px" }}
                  width="100%"
                  alt=""
                  srcSet
                />
              </div>
              <div className="col-md-9">
                <div className="row top">
                  <div className="col-sm-10">
                    <img src="./images/my/image1.jpg" alt="" srcSet />
                    <span
                      style={{
                        color: "#FF4D00",
                        fontWeight: 600,
                        marginLeft: "5px",
                        textOverflow: "ellipsis",
                        width: "90%",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Wealth Group - Unlock Crypto Wealth: Expert Education,
                      Charts &amp; Exclusive Community
                    </span>
                  </div>
                  <div
                    className="col-sm-2 text-end"
                    style={{ color: "#FF4D00" }}
                  >
                    <span className="renge m-auto">$150.00</span>
                    <span>/week</span>
                  </div>
                </div>
                <div className="rating my-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <span>
                    <a href>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </a>
                  </span>
                  <span className="subtitle">4.97</span>
                  <span className="subtitle">(40)</span>
                </div>
                <p className="description mt-2">
                  Cash Capital Investment Group is an E-learning platform
                  focused on portfolio advancement primarily through Financial
                  Markets Trading. We are a heavily experienced and qualified
                  tea with emphasis on TEACHING our members how to make Stock
                  Market recommendations
                </p>
                <div className="d-flex" style={{ color: "#535961" }}>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    Ecommerce •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap pe-1 ps-1"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Dropshipping •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Discord
                  </div>
                </div>
              </div>
              <a href="#">
                <span className="link" />
              </a>
            </div>
            <div
              className="row mt-2 my-box-hover"
              onclick="window.location.href='package.html'"
            >
              <div className="col-md-3">
                <img
                  src="https://assets.whop.com/cdn-cgi/image/width=640/https://assets.whop.com/images/images/25703.original.png?1680748162"
                  style={{ borderRadius: "4px" }}
                  width="100%"
                  alt=""
                  srcSet
                />
              </div>
              <div className="col-md-9">
                <div className="row top">
                  <div className="col-sm-10">
                    <img src="./images/my/image2.jpg" alt="" srcSet />
                    <span
                      style={{
                        color: "#FF4D00",
                        fontWeight: 600,
                        marginLeft: "5px",
                        textOverflow: "ellipsis",
                        width: "90%",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Cash Capital Investment Group
                    </span>
                  </div>
                  <div
                    className="col-sm-2 text-end"
                    style={{ color: "#FF4D00" }}
                  >
                    <span className="renge m-auto">$15.00</span>
                    <span>/week</span>
                  </div>
                </div>
                <div className="rating my-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <span>
                    <a href>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </a>
                  </span>
                  <span className="subtitle ms-2">4.97</span>
                  <span className="subtitle">(40)</span>
                </div>
                <p className="description mt-2">
                  WWG is an exclusive cryptocurrnecy community focused on: ✨
                  Educational Content ✨ Chart Ideas ✨ NFTs ✨ Plus More
                </p>
                <div className="d-flex" style={{ color: "#535961" }}>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    Ecommerce •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap pe-1 ps-1"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Dropshipping •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Discord
                  </div>
                </div>
              </div>
              <a href="#">
                <span className="link" />
              </a>
            </div>
            <div
              className="row mt-2 my-box-hover"
              onclick="window.location.href='package.html'"
            >
              <div className="col-md-3">
                <img
                  src="https://assets.whop.com/cdn-cgi/image/width=640/https://assets.whop.com/images/images/32460.original.png?1683930630"
                  style={{ borderRadius: "4px" }}
                  width="100%"
                  alt=""
                  srcSet
                />
              </div>
              <div className="col-md-9">
                <div className="row top">
                  <div className="col-sm-10">
                    <img src="./images/my/image3.jpg" alt="" srcSet />
                    <span
                      style={{
                        color: "#FF4D00",
                        fontWeight: 600,
                        marginLeft: "5px",
                        textOverflow: "ellipsis",
                        width: "90%",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Video Title Name
                    </span>
                  </div>
                  <div
                    className="col-sm-2 text-end"
                    style={{ color: "#FF4D00" }}
                  >
                    <span className="renge m-auto">$15.00</span>
                    <span>/week</span>
                  </div>
                </div>
                <div className="rating my-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <span>
                    <a href>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </a>
                  </span>
                  <span className="subtitle ms-2">4.97</span>
                  <span className="subtitle">(40)</span>
                </div>
                <p className="description mt-2">
                  Our community aims to empower traders to achieve financial
                  freedom, consistency, and self- sufficiency, while promoting a
                  healthy and fulfilling lifestyle beyond just making money ~
                  Daniel Meraz, Founder
                </p>
                <div className="d-flex" style={{ color: "#535961" }}>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    Ecommerce •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap pe-1 ps-1"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Dropshipping •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Discord
                  </div>
                </div>
              </div>
              <a href="#">
                <span className="link" />
              </a>
            </div>
            <div
              className="row mt-2 my-box-hover"
              onclick="window.location.href='package.html'"
            >
              <div className="col-md-3">
                <img
                  src="https://assets.whop.com/cdn-cgi/image/width=640/https://assets.whop.com/images/images/32857.original.png?1684156443"
                  style={{ borderRadius: "4px" }}
                  width="100%"
                  alt=""
                  srcSet
                />
              </div>
              <div className="col-md-9">
                <div className="row top">
                  <div className="col-sm-10">
                    <img src="./images/my/image4.jpg" alt="" srcSet />
                    <span
                      style={{
                        color: "#FF4D00",
                        fontWeight: 600,
                        marginLeft: "5px",
                        textOverflow: "ellipsis",
                        width: "90%",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Video Title Name
                    </span>
                  </div>
                  <div
                    className="col-sm-2 text-end"
                    style={{ color: "#FF4D00" }}
                  >
                    <span className="renge m-auto">$15.00</span>
                    <span>/week</span>
                  </div>
                </div>
                <div className="rating my-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <span>
                    <a href>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </a>
                  </span>
                  <span className="subtitle ms-2">4.97</span>
                  <span className="subtitle">(40)</span>
                </div>
                <p className="description mt-2">
                  Cash Capital Investment Group is an E-learning platform
                  focused on portfolio advancement primarily through Financial
                  Markets Trading. We are a heavily experienced and qualified
                  tea with emphasis on TEACHING our members how to make Stock
                  Market recommendations
                </p>
                <div className="d-flex" style={{ color: "#535961" }}>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    Ecommerce •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap pe-1 ps-1"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Dropshipping •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Discord
                  </div>
                </div>
              </div>
              <a href="#">
                <span className="link" />
              </a>
            </div>
            <div
              className="row mt-2 my-box-hover"
              onclick="window.location.href='package.html'"
            >
              <div className="col-md-3">
                <img
                  src="https://assets.whop.com/cdn-cgi/image/width=640/https://assets.whop.com/images/images/24833.original.png?1680307689"
                  style={{ borderRadius: "4px" }}
                  width="100%"
                  alt=""
                  srcSet
                />
              </div>
              <div className="col-md-9">
                <div className="row top">
                  <div className="col-sm-10">
                    <img src="./images/my/image5.jpg" alt="" srcSet />
                    <span
                      style={{
                        color: "#FF4D00",
                        fontWeight: 600,
                        marginLeft: "5px",
                        textOverflow: "ellipsis",
                        width: "90%",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Video Title Name
                    </span>
                  </div>
                  <div
                    className="col-sm-2 text-end"
                    style={{ color: "#FF4D00" }}
                  >
                    <span className="renge m-auto">$15.00</span>
                    <span>/week</span>
                  </div>
                </div>
                <div className="rating my-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <span>
                    <a href>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </a>
                  </span>
                  <span className="subtitle ms-2">4.97</span>
                  <span className="subtitle">(40)</span>
                </div>
                <p className="description mt-2">
                  Cash Capital Investment Group is an E-learning platform
                  focused on portfolio advancement primarily through Financial
                  Markets Trading. We are a heavily experienced and qualified
                  tea with emphasis on TEACHING our members how to make Stock
                  Market recommendations
                </p>
                <div className="d-flex" style={{ color: "#535961" }}>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    Ecommerce •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap pe-1 ps-1"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Dropshipping •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Discord
                  </div>
                </div>
              </div>
              <a href="#">
                <span className="link" />
              </a>
            </div>
            <div
              className="row mt-2 my-box-hover"
              onclick="window.location.href='package.html'"
            >
              <div className="col-md-3">
                <img
                  src="https://assets.whop.com/cdn-cgi/image/width=640/https://assets.whop.com/images/images/24402.original.png?1680107165"
                  style={{ borderRadius: "4px" }}
                  width="100%"
                  alt=""
                  srcSet
                />
              </div>
              <div className="col-md-9">
                <div className="row top">
                  <div className="col-sm-10">
                    <img src="./images/my/image6.jpg" alt="" srcSet />
                    <span
                      style={{
                        color: "#FF4D00",
                        fontWeight: 600,
                        marginLeft: "5px",
                        textOverflow: "ellipsis",
                        width: "90%",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Video Title Name
                    </span>
                  </div>
                  <div
                    className="col-sm-2 text-end"
                    style={{ color: "#FF4D00" }}
                  >
                    <h6 className="renge m-auto">$15.00</h6>
                    <span>/week</span>
                  </div>
                </div>
                <div className="rating my-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <span>
                    <a href>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </a>
                  </span>
                  <span className="subtitle ms-2">4.97</span>
                  <span className="subtitle">(40)</span>
                </div>
                <p className="description mt-2">
                  Cash Capital Investment Group is an E-learning platform
                  focused on portfolio advancement primarily through Financial
                  Markets Trading. We are a heavily experienced and qualified
                  tea with emphasis on TEACHING our members how to make Stock
                  Market recommendations
                </p>
                <div className="d-flex" style={{ color: "#535961" }}>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    Ecommerce •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap pe-1 ps-1"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Dropshipping •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Discord
                  </div>
                </div>
              </div>
              <a href="#">
                <span className="link" />
              </a>
            </div>
            <div
              className="row mt-2 my-box-hover"
              onclick="window.location.href='package.html'"
            >
              <div className="col-md-3">
                <img
                  src="./images/my/box7.jpg"
                  style={{ borderRadius: "4px" }}
                  width="100%"
                  alt=""
                  srcSet
                />
              </div>
              <div className="col-md-9">
                <div className="row top">
                  <div className="col-sm-10">
                    <img src="./images/my/image7.jpg" alt="" srcSet />
                    <span
                      style={{
                        color: "#FF4D00",
                        fontWeight: 600,
                        marginLeft: "5px",
                        textOverflow: "ellipsis",
                        width: "90%",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Video Title Name
                    </span>
                  </div>
                  <div
                    className="col-sm-2 text-end"
                    style={{ color: "#FF4D00" }}
                  >
                    <span className="renge m-auto">$15.00</span>
                    <span>/week</span>
                  </div>
                </div>
                <div className="rating my-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <span>
                    <a href>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </a>
                  </span>
                  <span className="subtitle ms-2">4.97</span>
                  <span className="subtitle">(40)</span>
                </div>
                <p className="description mt-2">
                  Cash Capital Investment Group is an E-learning platform
                  focused on portfolio advancement primarily through Financial
                  Markets Trading. We are a heavily experienced and qualified
                  tea with emphasis on TEACHING our members how to make Stock
                  Market recommendations
                </p>
                <div className="d-flex" style={{ color: "#535961" }}>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    Ecommerce •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap pe-1 ps-1"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Dropshipping •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Discord
                  </div>
                </div>
              </div>
              <a href="#">
                <span className="link" />
              </a>
            </div>
            <div
              className="row mt-2 my-box-hover"
              onclick="window.location.href='package.html'"
            >
              <div className="col-md-3">
                <img
                  src="./images/my/box8.jpg"
                  style={{ borderRadius: "4px" }}
                  width="100%"
                  alt=""
                  srcSet
                />
              </div>
              <div className="col-md-9">
                <div className="row top">
                  <div className="col-sm-10">
                    <img src="./images/my/image8.jpg" alt="" srcSet />
                    <span
                      style={{
                        color: "#FF4D00",
                        fontWeight: 600,
                        marginLeft: "5px",
                        textOverflow: "ellipsis",
                        width: "90%",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Video Title Name
                    </span>
                  </div>
                  <div
                    className="col-sm-2 text-end"
                    style={{ color: "#FF4D00" }}
                  >
                    <span className="renge m-auto">$15.00</span>
                    <span>/week</span>
                  </div>
                </div>
                <div className="rating my-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <span>
                    <a href>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </a>
                  </span>
                  <span className="subtitle ms-2">4.97</span>
                  <span className="subtitle">(40)</span>
                </div>
                <p className="description mt-2">
                  Cash Capital Investment Group is an E-learning platform
                  focused on portfolio advancement primarily through Financial
                  Markets Trading. We are a heavily experienced and qualified
                  tea with emphasis on TEACHING our members how to make Stock
                  Market recommendations
                </p>
                <div className="d-flex" style={{ color: "#535961" }}>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    Ecommerce •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap pe-1 ps-1"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Dropshipping •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Discord
                  </div>
                </div>
              </div>
              <a href="#">
                <span className="link" />
              </a>
            </div>
            <div
              className="row mt-2 my-box-hover"
              onclick="window.location.href='package.html'"
            >
              <div className="col-md-3">
                <img
                  src="./images/my/box9.jpg"
                  style={{ borderRadius: "4px" }}
                  width="100%"
                  alt=""
                  srcSet
                />
              </div>
              <div className="col-md-9">
                <div className="row top">
                  <div className="col-sm-10">
                    <img src="./images/my/image9.jpg" alt="" srcSet />
                    <span
                      style={{
                        color: "#FF4D00",
                        fontWeight: 600,
                        marginLeft: "5px",
                        textOverflow: "ellipsis",
                        width: "90%",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Video Title Name
                    </span>
                  </div>
                  <div
                    className="col-sm-2 text-end"
                    style={{ color: "#FF4D00" }}
                  >
                    <span className="renge m-auto">$15.00</span>
                    <span>/week</span>
                  </div>
                </div>
                <div className="rating my-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <span>
                    <a href>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </a>
                  </span>
                  <span className="subtitle ms-2">4.97</span>
                  <span className="subtitle">(40)</span>
                </div>
                <p className="description mt-2">
                  Cash Capital Investment Group is an E-learning platform
                  focused on portfolio advancement primarily through Financial
                  Markets Trading. We are a heavily experienced and qualified
                  tea with emphasis on TEACHING our members how to make Stock
                  Market recommendations
                </p>
                <div className="d-flex" style={{ color: "#535961" }}>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    Ecommerce •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap pe-1 ps-1"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Dropshipping •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Discord
                  </div>
                </div>
              </div>
              <a href="#">
                <span className="link" />
              </a>
            </div>
            <div
              className="row mt-2 my-box-hover"
              onclick="window.location.href='package.html'"
            >
              <div className="col-md-3">
                <img
                  src="./images/my/box10.jpg"
                  style={{ borderRadius: "4px" }}
                  width="100%"
                  alt=""
                  srcSet
                />
              </div>
              <div className="col-md-9">
                <div className="row top">
                  <div className="col-sm-10">
                    <img src="./images/my/image10.jpg" alt="" srcSet />
                    <span
                      style={{
                        color: "#FF4D00",
                        fontWeight: 600,
                        marginLeft: "5px",
                        textOverflow: "ellipsis",
                        width: "90%",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Video Title Name
                    </span>
                  </div>
                  <div
                    className="col-sm-2 text-end"
                    style={{ color: "#FF4D00" }}
                  >
                    <span className="renge m-auto">$15.00</span>
                    <span>/week</span>
                  </div>
                </div>
                <div className="rating my-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <span>
                    <a href>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </a>
                  </span>
                  <span className="subtitle ms-2">4.97</span>
                  <span className="subtitle">(40)</span>
                </div>
                <p className="description mt-2">
                  Cash Capital Investment Group is an E-learning platform
                  focused on portfolio advancement primarily through Financial
                  Markets Trading. We are a heavily experienced and qualified
                  tea with emphasis on TEACHING our members how to make Stock
                  Market recommendations
                </p>
                <div className="d-flex" style={{ color: "#535961" }}>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    Ecommerce •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap pe-1 ps-1"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Dropshipping •{" "}
                  </div>
                  <div
                    className="whitespace-nowrap"
                    style={{ fontSize: "12px" }}
                  >
                    {" "}
                    Discord
                  </div>
                </div>
              </div>
              <a href="#">
                <span className="link" />
              </a>
            </div>
          </div>
          {/* Main cards end */}
        </div>
        <div className="content_detail__pagination cdp" actpage={1}>
          <a href="#!-1" className="cdp_i">
            prev
          </a>
          <a href="#!1" className="cdp_i">
            1
          </a>
          <a href="#!2" className="cdp_i">
            2
          </a>
          <a href="#!3" className="cdp_i">
            3
          </a>
          <a href="#!4" className="cdp_i">
            4
          </a>
          <a href="#!5" className="cdp_i">
            5
          </a>
          <a href="#!6" className="cdp_i">
            6
          </a>
          <a href="#!7" className="cdp_i">
            7
          </a>
          <a href="#!8" className="cdp_i">
            8
          </a>
          <a href="#!9" className="cdp_i">
            9
          </a>
          <a href="#!10" className="cdp_i">
            10
          </a>
          <a href="#!11" className="cdp_i">
            11
          </a>
          <a href="#!12" className="cdp_i">
            12
          </a>
          <a href="#!13" className="cdp_i">
            13
          </a>
          <a href="#!14" className="cdp_i">
            14
          </a>
          <a href="#!15" className="cdp_i">
            15
          </a>
          <a href="#!16" className="cdp_i">
            16
          </a>
          <a href="#!17" className="cdp_i">
            17
          </a>
          <a href="#!18" className="cdp_i">
            18
          </a>
          <a href="#!19" className="cdp_i">
            19
          </a>
          <a href="#!+1" className="cdp_i">
            next
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Advisor;
