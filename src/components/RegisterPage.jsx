import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function catchInput(e) {
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  }

  function cathRegister(e) {
    e.preventDefault();
    axios
      .post("api/register", userData)
      .then((response) => {
        console.log(response.data);
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
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
            <form onSubmit={cathRegister} style={{ marginTop: 60 + "px" }}>
              <h1>
                <strong>
                  <i>Join to ous, and be connected to the world!</i>
                </strong>
              </h1>
              <div className="form-outline mb-4">
                <input
                  type="name"
                  className="form-control form-control-lg"
                  placeholder="Enter username..."
                  name="name"
                  onInput={catchInput}
                />
                <label
                  className="form-label"
                  style={{ color: "green", opacity: 0.7 }}
                >
                  <i>Username</i>
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter email address..."
                  name="email"
                  onInput={catchInput}
                />
                <label
                  className="form-label"
                  style={{ color: "green", opacity: 0.7 }}
                >
                  <i>Email address</i>
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password..."
                  name="password"
                  onInput={catchInput}
                />
                <label
                  className="form-label"
                  style={{ color: "green", opacity: 0.7 }}
                >
                  <i>Password</i>
                </label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-success btn-lg"
                  style={{ marginTop: 16 + "px", marginBottom: 30 + "px" }}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
