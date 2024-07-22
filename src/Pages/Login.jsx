import React, { useState } from "react";
import axiosInstance from "../utils/axios";
import { useNavigate } from "react-router-dom";
import BharatAiLogo from "../Assets/images/bharatai.jpg";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post("/api/user/login", {
        email,
        password,
      });
      setMessage(data.message);
      localStorage.setItem("token", data.token);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setError(error.response.data);
    }
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-white flex-column gap-2"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div className="">
        <img
          src={BharatAiLogo}
          alt="Bharat gpt"
          width={200}
          className="mb-20"
        />
      </div>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary w-100 m-2">
            Submit
          </button>
          {localStorage.getItem("token") && (
            <button onClick={logout} className="btn btn-danger w-100 m-2">
              Logout
            </button>
          )}
        </div>
      </form>
      {error && (
        <div
          className="alert alert-danger d-flex align-items-center"
          role="alert"
        >
          <div>{!error.success && error.message}</div>
        </div>
      )}
      {message && (
        <div
          className="alert alert-success d-flex align-items-center"
          role="alert"
        >
          <div>{message}</div>
        </div>
      )}
    </div>
  );
};

export default Login;
