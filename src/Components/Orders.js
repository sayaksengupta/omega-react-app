import React from "react";
import "../css/orders/main.css";
import "../css/orders/jQueryTab.css";
import "../css/orders/animation.css";
import "../css/orders/normalize.css";
import { Link } from "react-router-dom";

function Orders({ setSelectedNav }) {
  return (
    <>
      <div className="main_warp">
        <div className="top_header" />
        <div
          className="banner"
          style={{ backgroundImage: "url(img/subs-banner.png)" }}
        >
          <h1>Subscriptions</h1>
        </div>
        <div className="content_wrap">
          <h2>Orders</h2>
          <div
            className="single_subs"
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedNav("order-details")}
          >
            <div className="content_left">
              <h3>
                Private Account <img src="img/check.png" alt="" />
              </h3>
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
            <div className="content_right">
              <div className="price">$1500.00</div>
              <span className="active">Active</span>
              <div className="btn_wrap">
                <a href="#">Renew</a>
                <a href="#" className="bg_red">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div
            className="single_subs"
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedNav("order-details")}
          >
            <div className="content_left">
              <h3>
                Private Account <img src="img/check.png" alt="" />
              </h3>
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
            <div className="content_right">
              <div className="price">$1500.00</div>
              <span className="active">Active</span>
              <div className="btn_wrap">
                <a href="#">Renew</a>
                <a href="#" className="bg_red">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div
            className="single_subs"
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedNav("order-details")}
          >
            <div className="content_left">
              <h3>
                Private Account <img src="img/check.png" alt="" />
              </h3>
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
            <div className="content_right">
              <div className="price">$1500.00</div>
              <span className="active">Active</span>
              <div className="btn_wrap">
                <a href="#">Renew</a>
                <a href="#" className="bg_red">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
