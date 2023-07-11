import axios from "axios";
import { Outlet } from "react-router-dom";

const NavBar = ({ token }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Blog App
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
              <a className="nav-link active" aria-current="page" href="/posts">
                All Posts
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* <Outlet /> */}
    </div>
  );
};

export default NavBar;
