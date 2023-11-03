import React, { useState } from "react";
import "../css/orders/main.css";
import "../css/orders/jQueryTab.css";
import "../css/orders/animation.css";
import "../css/orders/normalize.css";
import { Link } from "react-router-dom";

function OrderDetails({setSelectedNav}) {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const toggleReview = () => {
    setIsReviewOpen(!isReviewOpen);
    if (isDetailsOpen) {
      setIsDetailsOpen(false);
    }
  };

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
    if (isReviewOpen) {
      setIsReviewOpen(false);
    }
  };

  return (
    <>
      <div className="main_warp">
        <div className="top_header" />
        <div
          className="banner"
          style={{ backgroundImage: "url(img/details-banner.png)" }}
        >
          <h1>Details</h1>
        </div>
        <div className="content_wrap">
          <div className="subs_box">
            <div className="left">
              {" "}
              <h3>
                Private Account <img src="img/check.png" alt="" />
              </h3>
            </div>
            <div className="right">
              {" "}
              <ul className="feature_list">
                <li>
                  <img src="img/icon.png" alt="" /> It is Your Own Account
                </li>
                <li>
                  <img src="img/icon.png" alt="" /> 3 out of 5 is our winning
                  ratio
                </li>
                <li>
                  <img src="img/icon.png" alt="" /> You only pay service fee 20%
                  on profits each trade
                </li>
                <li>
                  <img src="img/icon.png" alt="" /> Minimum investment required
                  100k
                </li>
              </ul>
            </div>
          </div>
          <div className="meta_wrap">
            <a href="#" className="buy">
              Buy it again
            </a>
            <div className="accrd">
              <div className="acd_head" onClick={toggleReview}>
                Write a Review <img src="img/Vector-3.svg" alt="" />
              </div>
              {isReviewOpen && (
                <div className="accr-cont">
                  <ul className="star ">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </ul>
                </div>
              )}
            </div>
            <div className="accrd">
              <div className="view_head" onClick={toggleDetails}>
                View Product Details <img src="img/Vector-3.svg" alt="" />
              </div>
              {isDetailsOpen && (
                <div className="view-cont">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco
                  </p>
                </div>
              )}
            </div>
   
          </div>

        </div>

      </div>
      <div style={{width:"100%",justifyContent:"end",display:"flex"}}>
      <Link className="nav-link portfolio-link" onClick={() => setSelectedNav("orders")}>Go Back</Link>
      </div>
    </>
  );
}

export default OrderDetails;
