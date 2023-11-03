import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src="assets/img/logomain.png" class="img-fluid" alt="..." />
          </Link>

          <div
            class="collapse navbar-container navbar-collapse"
            id="navbarResponsive"
          >
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/advisor">
                  Advisor
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact-us">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/faq">
                  FAQ
                </Link>
              </li>
              {!token ? (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to="/user-selection">
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link portfolio-link" to="/user-selection">
                      Sign up
                    </Link>
                  </li>
                </>
              ) : (
                <li class="nav-item">
                  <Link class="nav-link portfolio-link" to={`/dashboard`}>
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars ms-1"></i>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
