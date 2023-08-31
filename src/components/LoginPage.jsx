import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ addToken }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function catchInput(e) {
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  }

  let navigate = useNavigate();

  function putLogin(e) {
    e.preventDefault();
    axios
      .post("api/login", userData)
      .then((response) => {
        console.log(response);

        if (response.statusText === "OK") {
          window.sessionStorage.setItem("auth_token", response.data.token);
          addToken(response.data.token);
          console.log(response.data.korisnik.id);
          alert("Welcome to Connectivity!");
          if (parseInt(response.data.korisnik.id) == 1) navigate("/home");
          else navigate("/home1");
        }
      })
      .catch((e) => {
        console.log(e);
        alert("You're didn't put correct data");
      });
  }

  return (
    <section
      className="vh-100"
      style={{
        paddingTop: 40 + "px",
      }}
    >
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <form
              onSubmit={(e) => putLogin(e)}
              style={{ marginTop: 60 + "px" }}
            >
              <h1>
                <strong>
                  <i>Hello again!</i>
                </strong>
              </h1>
              <div className="form-outline mt-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter email address..."
                  name="email"
                  onInput={(e) => catchInput(e)}
                />
                <label
                  className="form-label"
                  style={{ color: "green", opacity: 0.7 }}
                >
                  <i>Email address</i>
                </label>
              </div>

              <div className="mt-3 login-fr">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password..."
                  name="password"
                  onInput={(e) => catchInput(e)}
                />
                <label
                  className="form-label"
                  style={{ color: "green", opacity: 0.7 }}
                >
                  <i>Password</i>
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success btn-lg"
                  style={{ marginTop: 16 + "px", marginBottom: 30 + "px" }}
                >
                  Login
                </button>
                <p className="small fw-bold">
                  Don't have account?{" "}
                  <a
                    href="/register"
                    className="link-submit"
                    style={{ textDecoration: "none" }}
                  >
                    Register here.
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
