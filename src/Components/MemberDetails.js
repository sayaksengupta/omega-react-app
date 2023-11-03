import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/member-details/main.css";
import "../css/member-details/animation.css";
import "../css/member-details/jQueryTab.css";
import "../css/member-details/normalize.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

function MemberDetails({ selectedMember }) {
  const [member, setMember] = useState("");
  const token = localStorage.getItem("token");

  const fetchMember = async () => {
    await axios
      .get(`http://localhost:8080/organisation/get-member/${selectedMember}`, {
        headers: { token },
      })
      .then((res) => {
        console.log(res.data);
        setMember(res.data.member);
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };

  useEffect(() => {
    fetchMember();
  }, []);

  return (
    <>
      {member && (
        <>
          <div>
            <div className="section_top">
              <div className="main__wrap">
                <h1>Manage Employees</h1>
                <div className="user_profile">
                  <img src="/assets/img/circle.png" alt="" />
                  <h3>{member.name}</h3>
                  <p>ID- {member._id}</p>
                  <div className="btn_holder">
                    <a href="#" className="btn_broderd">
                      Push your profile to top
                    </a>
                    {member.premium ? (
                      <a href="#" className="btn_broderd">
                        Premium Advisor
                      </a>
                    ) : (
                      <a href="#" className="btn_broderd">
                        Buy Premium
                      </a>
                    )}
                  </div>
                </div>
                <div className="about__area">
                  <h3>About us</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.Lorem ipsum dolor sit{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="sertificate_area">
              <h2>
                Certificates &amp; Achievements{" "}
                <img src="/assets/img/batch.svg" alt="" />
              </h2>
              <div className="selider__area">
                <div className="main__wrap">
                  <Carousel
                    className="certificate_carousel"
                    showArrows={false}
                    showIndicators={false}
                    infiniteLoop={true}
                  >
                    {/* Add your certificate images here */}
                    <div className="single_cert_item">
                      <img src="/assets/img/certificate.png" alt="" />
                    </div>
                    <div className="single_cert_item">
                      <img src="/assets/img/certificate.png" alt="" />
                    </div>
                    <div className="single_cert_item">
                      <img src="/assets/img/certificate.png" alt="" />
                    </div>
                    <div className="single_cert_item">
                      <img src="/assets/img/certificate.png" alt="" />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
            <div
              className="package__bg"
              style={{ backgroundImage: "url(/assets/img/bg-package.png)" }}
            >
              <h2>Packages</h2>
            </div>
            <div className="section_button">
              <div className="main__wrap">
                <div className="package__list">
                  <div className="single__package">
                    <div className="package__left">
                      <h3>Private Account </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute
                      </p>
                      <ul className="package__meta">
                        <li>
                          <a href="#">
                            Sold - 2{" "}
                            <img src="/assets/img/icon-cart.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Delete{" "}
                            <img src="/assets/img/icon-delet.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Hide <img src="/assets/img/icon-hdie.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Views 10921{" "}
                            <img src="/assets/img/icon-view.svg" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="package__right">
                      <h3>1,500.0 0</h3>
                      <a href="#">Manage Subscribers</a>
                    </div>
                  </div>
                  <div className="single__package">
                    <div className="package__left">
                      <h3>Private Account </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute
                      </p>
                      <ul className="package__meta">
                        <li>
                          <a href="#">
                            Sold - 2{" "}
                            <img src="/assets/img/icon-cart.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Delete{" "}
                            <img src="/assets/img/icon-delet.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Hide <img src="/assets/img/icon-hdie.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Views 10921{" "}
                            <img src="/assets/img/icon-view.svg" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="package__right">
                      <h3>1,500.0 0</h3>
                      <a href="#">Manage Subscribers</a>
                    </div>
                  </div>
                  <div className="single__package">
                    <div className="package__left">
                      <h3>Private Account </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute
                      </p>
                      <ul className="package__meta">
                        <li>
                          <a href="#">
                            Sold - 2{" "}
                            <img src="/assets/img/icon-cart.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Delete{" "}
                            <img src="/assets/img/icon-delet.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Hide <img src="/assets/img/icon-hdie.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Views 10921{" "}
                            <img src="/assets/img/icon-view.svg" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="package__right">
                      <h3>1,500.0 0</h3>
                      <a href="#">Manage Subscribers</a>
                    </div>
                  </div>
                  <div className="single__package">
                    <div className="package__left">
                      <h3>Private Account </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute
                      </p>
                      <ul className="package__meta">
                        <li>
                          <a href="#">
                            Sold - 2{" "}
                            <img src="/assets/img/icon-cart.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Delete{" "}
                            <img src="/assets/img/icon-delet.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Hide <img src="/assets/img/icon-hdie.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Views 10921{" "}
                            <img src="/assets/img/icon-view.svg" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="package__right">
                      <h3>1,500.0 0</h3>
                      <a href="#">Manage Subscribers</a>
                    </div>
                  </div>
                  <div className="addnew_btn">
                    <a href="#">
                      Add New <img src="img/icon-plus.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="chat_areaa">
                  <h2>Chats</h2>
                  <div className="chat_box">
                    <h3 className="chat_hading">Messages</h3>
                    <div className="screen__1" />
                    <div className="screen__2" />
                    <a href="#" className="btn_new_chat">
                      New Chat
                    </a>
                  </div>
                </div>
                <div className="tras_table_area">
                  <h2>Transaction list</h2>
                  <div className="trans_table">
                    <table>
                      <tbody>
                        <tr>
                          <th>Name</th>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Status</th>
                        </tr>
                        <tr>
                          <td>Loremipsem</td>
                          <td>DD/MM YY</td>
                          <td>$100</td>
                          <td>Paid</td>
                        </tr>
                        <tr>
                          <td>Loremipsem</td>
                          <td>DD/MM YY</td>
                          <td>$100</td>
                          <td>Paid</td>
                        </tr>
                        <tr>
                          <td>Loremipsem</td>
                          <td>DD/MM YY</td>
                          <td>$100</td>
                          <td>Paid</td>
                        </tr>
                        <tr>
                          <td>Loremipsem</td>
                          <td>DD/MM YY</td>
                          <td>$100</td>
                          <td>Paid</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="wallet_area">
                  <h2>Wallet</h2>
                  <div className="walet_box">
                    <h3>Amount</h3>
                    <p className="price">
                      <img src="/assets/img/doller.svg" alt="" />
                      {member.wallet}
                    </p>
                    <a href="#" className="widthdraw">
                      Withdraw
                    </a>
                    <a href="#" className="addmoney">
                      Add money
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MemberDetails;
