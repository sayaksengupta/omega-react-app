import React, { useEffect, useState } from "react";
import "../css/home.css";
import "../css/extra.css";
import "../css/aos.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");

  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });

  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
  });

  const location = useLocation();

  // Access the query parameters from the location object
  const queryParams = new URLSearchParams(location.search);

  const Type = queryParams.get("type");

  console.log(Type);

  const loginUser = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8080/${Type}/login`, logUser)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("TYPE", Type);
        if (Type === "organisation") {
          localStorage.setItem("user", JSON.stringify(res.data.organisation));
        } else if (Type === "advisor") {
          localStorage.setItem("user", JSON.stringify(res.data.advisor));
        } else {
          localStorage.setItem("user", JSON.stringify(res.data.investor));
        }

        console.log(res.data);
        navigate(`/dashboard`);
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };

  const registration = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8080/${Type}/register`, registerUser)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.organisation));
        localStorage.setItem("user", JSON.stringify(res.data.advisor));
        localStorage.setItem("user", JSON.stringify(res.data.investor));
        console.log(res.data);
        navigate(`/dashboard`);
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };

  useEffect(() => {
    if (!Type) {
      window.location.replace("/user-selection");
    }
  }, [location]);

  return (
    <>
      <div class="row justify-content-center">
        <div className="col-lg-5" id="loginSignup">
          <div className="modal-body text-center">
            <img
              className="img-fluid d-block mx-auto"
              src="assets/img/logofooter.png"
              alt="..."
            />
            {/* Project details*/}
            <h2 className="mb-5 mt-5">Sign in to Omega</h2>
            <ul className="logintab">
              <li>
                <Link
                  to={`/login?type=${Type}`}
                  onClick={() => setMode("login")}
                  className={mode === "login" ? "active" : ""}
                  id="loginFromClick"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  to={`/login?type=${Type}`}
                  className={mode === "signup" ? "active" : ""}
                  onClick={() => setMode("signup")}
                >
                  Sign Up
                </Link>
              </li>
            </ul>

            {mode === "login" ? (
              <div
                id="signinform"
                className="logtabs"
                style={{ display: "block" }}
              >
                <div className="d-flex justify-content-around mb-4">
                  <a href="#">
                    <img
                      src="assets/img/googlelogin.png"
                      className="img-fluid"
                      alt="..."
                    />
                  </a>
                  <a href="#" onclick="SignInAppleOnlick()">
                    <img
                      src="assets/img/applelogin.png"
                      className="img-fluid"
                      alt="..."
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/img/facebooklogin.png"
                      className="img-fluid"
                      alt="..."
                    />
                  </a>
                </div>
                <h6>
                  <span>Or continue with email</span>
                </h6>
                <form id="submitFormLogin" onSubmit={loginUser}>
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="IzkzRolu8TPVKVtgdP63DE9EItvNzAvm3tpWDfxw"
                  />
                  <div className="inputbg">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                      value={logUser.email}
                      onChange={(e) =>
                        setLogUser({ ...logUser, email: e.target.value })
                      }
                      style={{ width: "100%" }}
                      autoComplete="off"
                    />
                  </div>
                  <p
                    id="errEmailLogin"
                    style={{
                      color: "red",
                      fontSize: "10px",
                      textAlign: "left",
                    }}
                  />
                  <div className="inputbg">
                    <input
                      type="password"
                      placeholder="password"
                      required
                      name="password"
                      value={logUser.password}
                      onChange={(e) =>
                        setLogUser({ ...logUser, password: e.target.value })
                      }
                      style={{ width: "100%" }}
                      autoComplete="off"
                    />
                  </div>
                  <p
                    id="errPasswordLogin"
                    style={{
                      color: "red",
                      fontSize: "10px",
                      textAlign: "left",
                    }}
                  />
                  <div className="text-left">
                    <a href="#" className="forgotpass">
                      Forgot password ?
                    </a>
                  </div>
                  <input
                    type="submit"
                    className="signinbuttonspecial"
                    defaultValue="Sign in"
                    id="submitLogin"
                  />
                </form>
              </div>
            ) : (
              <div
                id="signupform"
                className="logtabs"
                style={{ display: "block" }}
              >
                <div className="d-flex justify-content-around mb-4">
                  <a href="#">
                    <img
                      src="assets/img/googlelogin.png"
                      className="img-fluid"
                      alt="..."
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/img/applelogin.png"
                      className="img-fluid"
                      alt="..."
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/img/facebooklogin.png"
                      className="img-fluid"
                      alt="..."
                    />
                  </a>
                </div>
                <h6>
                  <span>Or</span>
                </h6>
                <form onSubmit={registration} id="submitFormRegister">
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="IzkzRolu8TPVKVtgdP63DE9EItvNzAvm3tpWDfxw"
                  />
                  <div className="inputbg">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={(e) =>
                        setRegisterUser({
                          ...registerUser,
                          name: e.target.value,
                        })
                      }
                      style={{ width: "100%" }}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <p
                    id="errNameRegister"
                    style={{
                      color: "red",
                      fontSize: "10px",
                      textAlign: "left",
                    }}
                  />
                  <div className="inputbg">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={(e) =>
                        setRegisterUser({
                          ...registerUser,
                          email: e.target.value,
                        })
                      }
                      style={{ width: "100%" }}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <p
                    id="errEmailRegister"
                    style={{
                      color: "red",
                      fontSize: "10px",
                      textAlign: "left",
                    }}
                  />
                  <div className="inputbg">
                    <input
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      onChange={(e) =>
                        setRegisterUser({
                          ...registerUser,
                          phone: e.target.value,
                        })
                      }
                      style={{ width: "100%" }}
                      maxLength={10}
                      autoComplete="off"
                    />
                  </div>
                  <p
                    id="errPhoneRegister"
                    style={{
                      color: "red",
                      fontSize: "10px",
                      textAlign: "left",
                    }}
                  />
                  <div className="inputbg">
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      onChange={(e) =>
                        setRegisterUser({
                          ...registerUser,
                          password: e.target.value,
                        })
                      }
                      style={{ width: "100%" }}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <p
                    id="errPasswordRegister"
                    style={{
                      color: "red",
                      fontSize: "10px",
                      textAlign: "left",
                    }}
                  />
                  <div className="inputbg">
                    <input
                      type="password"
                      name="confirmpass"
                      onChange={(e) =>
                        setRegisterUser({
                          ...registerUser,
                          cpassword: e.target.value,
                        })
                      }
                      placeholder="Confirm Password"
                      style={{ width: "100%" }}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <p
                    id="errConfirmRegister"
                    style={{
                      color: "red",
                      fontSize: "10px",
                      textAlign: "left",
                    }}
                  />
                  <input
                    type="hidden"
                    name="userType"
                    id="userTypeRegister"
                    defaultValue
                  />
                  <p id="as">
                    Signing up as{" "}
                    <span
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
                    >
                      {Type}
                    </span>
                  </p>
                  <label className="checkcontainer">
                    By signing up, you agree to Omega’s
                    <a href="#">Terms of Use</a>,<a href="#">Privacy Policy</a>{" "}
                    and
                    <a href="#">Cookie Policy</a>.
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                  <input
                    type="submit"
                    className="signinbuttonspecial"
                    defaultValue="Sign Up"
                    id="submitRegister"
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
