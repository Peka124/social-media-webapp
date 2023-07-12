import React from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";

const NavBar = ({ token }) => {
  function handleLogout() {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "api/logout",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.setItem("auth_token", null);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={{ backgroundColor: "blue" }}>
          <a
            className="navbar-brand"
            href="/"
            style={{
              color: "white",
              fontSize: 30 + "px",
              marginLeft: 20 + "px",
            }}
          >
            <b>Connectivity</b>
            <BsFillPeopleFill></BsFillPeopleFill>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse show"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="/posts"
                style={{ color: "white" }}
              >
                <b>All Posts</b>
              </a>
              {token == null ? (
                <a
                  className="nav-link"
                  href="/login"
                  style={{ color: "white" }}
                >
                  <b>Login</b>
                </a>
              ) : (
                <a
                  className="nav-link"
                  href="/"
                  onClick={handleLogout}
                  style={{ color: "white" }}
                >
                  <b>Logout</b>
                </a>
              )}
              {/* <a className="nav-link" href="#" style={{ color: "white" }}>
                Pricing
              </a> */}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
