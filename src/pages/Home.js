import React from "react";
// import "../css/home.css";
// import "../css/extra.css";
// import "../css/nav.css";
// import "../css/aos.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../css/home.css";

function home() {
  return (
    <div>
      {/* Navigation*/}
      <Navbar />
      {/* Masthead*/}
      <header className="masthead">
        <div
          className="container-fluid"
          style={{ paddingRight: "0em", paddingLeft: "0em" }}
        >
          <div className="masthead-subheading">
            <img src="/assets/img/ribbon_red_top.png" alt="..." />
            <h2>OUR TOP RATED ADVISORS</h2>
            <img src="/assets/img/ribbon_red_top.png" alt="..." />
          </div>
          <div className="promo-carousel" id="grouploop-1">
            <div className="item-wrap">
              <div className="item">
                <a href="advisor.html">
                  <img src="assets/img/bannersmall01.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="advisor.html">
                  <img src="assets/img/bannersmall02.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="advisor.html">
                  <img src="assets/img/bannersmall03.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="advisor.html">
                  <img src="assets/img/bannersmall04.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="advisor.html">
                  <img src="assets/img/bannersmall05.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="advisor.html">
                  <img src="assets/img/bannersmall06.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="advisor.html">
                  <img src="assets/img/bannersmall07.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="advisor.html">
                  <img src="assets/img/bannersmall08.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="advisor.html">
                  <img src="assets/img/bannersmall09.jpg" alt="..." />
                </a>
              </div>
            </div>
          </div>
          <div className="promo-carousel" id="grouploop-2">
            <div className="item-wrap">
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall10.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall11.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall12.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall13.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall14.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall15.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall16.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall17.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall18.jpg" alt="..." />
                </a>
              </div>
            </div>
          </div>
          <div className="promo-carousel" id="grouploop-3">
            <div className="item-wrap">
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall01.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall02.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall03.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall04.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall05.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall06.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall07.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall08.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall09.jpg" alt="..." />
                </a>
              </div>
            </div>
          </div>
          <div className="promo-carousel" id="grouploop-4">
            <div className="item-wrap">
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall10.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall11.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall12.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall13.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall14.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall15.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall16.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall17.jpg" alt="..." />
                </a>
              </div>
              <div className="item">
                <a href="https://notebrains.com/html/omega/advisor.html">
                  <img src="assets/img/bannersmall18.jpg" alt="..." />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* search advisior*/}
      {/* <div class="container searchadvisor aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-delay="350">
      <form action="#">
          <label><i class="fa fa-search" aria-hidden="true"></i><input type="text" placeholder="Search here"></label>
          <button type="submit">Search</button>
      </form>
  </div> */}
      {/* search advisior*/}
      {/* tab section */}
      <div className="container">
        <div className="tabsection" id="tabsections">
          <div className="lefttab">
            <ul className="inadortab">
              <li>
                <a href="#investor" className="foralltab active">
                  INVESTOR
                </a>
              </li>
              <li>
                <a href="#advisor" className="foralltab">
                  ADVISOR
                </a>
              </li>
              <li>
                <a href="#organization" className="foralltab">
                  ORGANIZATION
                </a>
              </li>
            </ul>
            <div className="tabs" id="investor" style={{ display: "block" }}>
              <p>
                "Investors who invest in stock, marketing, NFTs (Non-Fungible
                Tokens), and cryptocurrencies are typically interested in
                generating high returns on their investments. Stock investors
                usually invest in publicly traded companies in the hope that the
                value of the stock will appreciate over time, allowing them to
                sell their shares at a higher price than they bought them for.
                Marketing investors may invest in various companies and products
                that they believe have strong potential for growth or a unique
                value proposition. NFT investors are interested in purchasing
                digital assets that are unique and can potentially appreciate in
                value over time. Finally, crypto investors often invest in
                cryptocurrencies such as Bitcoin or Ethereum, with the hope that
                the value of these currencies will increase over time, allowing
                them to profit from their investments. These investors often
                have a high tolerance for risk, as the value of cryptocurrencies
                can be highly volatile."
              </p>
            </div>
            <div className="tabs" id="advisor">
              <p>
                "Advisors who provide advice to investors who invest in stock,
                marketing, NFTs, and crypto play a crucial role in helping their
                clients make informed investment decisions. These advisors are
                typically knowledgeable about market trends, financial
                instruments, and the various factors that can impact investment
                outcomes. In the case of stock investments, advisors may provide
                guidance on selecting individual stocks or building a
                diversified portfolio. For marketing investments, they may offer
                insights on emerging trends, consumer behavior, and the
                competitive landscape. In the world of NFTs and crypto, advisors
                may help clients navigate the complex and rapidly evolving
                landscape of digital assets, including strategies for buying,
                holding, and selling these assets. Overall, advisors can help
                investors manage risk and optimize their returns, while also
                providing valuable education and support throughout the
                investment process."
              </p>
            </div>
            <div className="tabs" id="organization">
              <p>
                "There are many organizations that hire advisors to provide
                advice to investors who are interested in stock, marketing, NFT,
                and crypto investments. These advisors are typically experts in
                their respective fields and have a deep understanding of the
                trends, risks, and potential rewards of these investments. Some
                of the most well-known organizations that hire these advisors
                include investment banks, wealth management firms, and brokerage
                firms. These organizations often have teams of advisors who work
                with clients to develop investment strategies based on their
                unique financial goals and risk tolerance. The advice provided
                by these advisors can be incredibly valuable to investors,
                particularly those who are new to the world of investing. By
                working with an advisor, investors can gain access to
                specialized knowledge and insights that can help them make
                informed decisions about where to invest their money.
                Additionally, advisors can help investors navigate the
                complexities of the market and avoid common pitfalls and
                mistakes. Overall, organizations that hire advisors to provide
                advice on stock, marketing, NFT, and crypto investments play an
                important role in helping investors achieve their financial
                goals and maximize their returns. "
              </p>
            </div>
          </div>
          <div className="righttabimg">
            <img src="assets/img/inador.jpg" className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
      {/* tab section*/}
      <section className="signals">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-6 text-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-delay={350}
            >
              <h5>TO KNOW MORE ABOUT SIGNALS</h5>
              <a href="http://omega.5gsoftware.net/login">JOIN NOW</a>
              <br />
              <br />
            </div>
            <div className="col-sm-6">
              <img
                src="assets/img/aboutsignal.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="whatisomega">
        <div className="container text-center">
          <div className="whatomegadiv">
            <h2
              className="aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-delay={350}
            >
              WHAT IS OMEGA
            </h2>
            <p
              className="aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-delay={350}
            >
              "Lorem ipsum Omega serves as a platform for investors,
              organizations, and advisors to come together to invest, hire, and
              advise. One such company is a popular online marketplace that
              connects investors with a range of investment opportunities, from
              stocks and bonds to alternative assets like NFTs and crypto.{" "}
            </p>
          </div>
        </div>
        <div className="container-fluid whatisomegabg">
          <div className="whatisomegacont">
            <div className="whatomegaanim">
              <img
                src="assets/img/omegabox01.png"
                className="whatomegaanimimg aos-init aos-animate"
                alt="..."
                data-aos="fade-left"
                data-aos-duration={800}
                data-aos-delay={350}
              />
              <img
                src="assets/img/omegabox02.png"
                className="whatomegaanimimg aos-init aos-animate"
                alt="..."
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={350}
              />
              <img
                src="assets/img/omegabox03.png"
                className="whatomegaanimimg aos-init aos-animate"
                alt="..."
                data-aos="fade-right"
                data-aos-duration={800}
                data-aos-delay={350}
              />
            </div>
            <img
              src="assets/img/omegaline.png"
              className="img-fluid aos-init aos-animate"
              alt="..."
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-delay={350}
            />
          </div>
        </div>
      </section>
      <section className="whatisomega" style={{ paddingTop: 0 }}>
        <div className="container text-center">
          <div className="whatomegadiv">
            <h2
              className="aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-delay={350}
            >
              WHO USES OMEGA
            </h2>
            <p
              className="aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-delay={350}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
          <div className="usesomegachart">
            <img
              src="assets/img/useomega01.png"
              className="useomega01 img-fluid aos-init aos-animate"
              alt="..."
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-delay={750}
            />
            <img
              src="assets/img/useomega02.png"
              className="useomega02 img-fluid aos-init aos-animate"
              alt="..."
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-delay={750}
            />
            <img
              src="assets/img/useomega03.png"
              className="useomega03 img-fluid aos-init aos-animate"
              alt="..."
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-delay={750}
            />
            <img
              src="assets/img/useomega04.png"
              className="useomega04 img-fluid aos-init aos-animate"
              alt="..."
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-delay={750}
            />
            <img
              src="assets/img/useomega05.png"
              className="useomega05 img-fluid aos-init aos-animate"
              alt="..."
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-delay={750}
            />
            <img
              src="assets/img/useomega06.png"
              className="useomega06 img-fluid aos-init aos-animate"
              alt="..."
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-delay={750}
            />
          </div>
        </div>
      </section>
      <section className="whatisomega">
        <div className="container text-center">
          <div
            className="whatomegadiv"
            style={{ maxWidth: "814px", marginBottom: "70px" }}
          >
            <ul
              className="inadortab"
              style={{ justifyContent: "space-evenly" }}
            >
              <li>
                <a href="#stocks" className="foralltab active">
                  STOCKS
                </a>
              </li>
              <li>
                <a href="#crypto" className="foralltab">
                  CRYPTO
                </a>
              </li>
              <li>
                <a href="#nft" className="foralltab">
                  NFT
                </a>
              </li>
            </ul>
          </div>
          <div className="tabs" id="stocks" style={{ display: "block" }}>
            <img
              src="assets/img/stock_inf.jpg"
              className="img-fluid home-img"
              alt="..."
            />
          </div>
          <div className="tabs" id="crypto" style={{ display: "none" }}>
            <img
              src="assets/img/crypto_inf.jpg"
              className="img-fluid home-img"
              alt="..."
            />
          </div>
          <div className="tabs" id="nft" style={{ display: "none" }}>
            <img
              src="assets/img/nft_inf.jpg"
              className="img-fluid home-img"
              alt="..."
            />
          </div>
        </div>
      </section>
      <section className="whatisomega">
        <div className="container text-center">
          <div
            className="whatomegadiv"
            style={{ maxWidth: "814px", marginBottom: "70px" }}
          >
            <h2
              className="aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-delay={350}
            >
              ADVISOR’S DESK
            </h2>
          </div>
          <img src="assets/img/advisor.jpg" className="img-fluid" alt="..." />
        </div>
      </section>
      <section className="whatisomega">
        <div className="container text-center">
          <div
            className="whatomegadiv"
            style={{ maxWidth: "814px", marginBottom: "70px" }}
          >
            <h2
              className="aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-delay={350}
            >
              KNOW MORE ABOUT STOCKS CRYPTO NFT BY OUR TOP ADVISORS
            </h2>
          </div>
          <div className="row stockvid">
            <div className="col-sm-3">
              <img
                src="assets/img/stockcryptovid01.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-sm-3">
              <img
                src="assets/img/stockcryptovid02.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-sm-3">
              <img
                src="assets/img/stockcryptovid03.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-sm-3">
              <img
                src="assets/img/stockcryptovid04.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-sm-3">
              <img
                src="assets/img/stockcryptovid05.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-sm-3">
              <img
                src="assets/img/stockcryptovid06.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-sm-3">
              <img
                src="assets/img/stockcryptovid07.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-sm-3">
              <img
                src="assets/img/stockcryptovid08.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
      {/* Footer*/}
      <Footer />
    </div>
  );
}

export default home;
