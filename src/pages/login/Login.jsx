import React, { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState([]);
  return (
    <div
      className="container"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="col-4">
        <form action="">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Username
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@mytranport.in"
            />
          </div>
          <div class="mb-3">
            <label for="inputPassword5" class="form-label">
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              class="form-control"
              aria-describedby="passwordHelpBlock"
            />
            <div id="passwordHelpBlock" class="form-text">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
