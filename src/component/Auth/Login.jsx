import React, { useState } from "react";
import Adminpanel from "../Adminpanel/Adminpanel.js";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logedin, setLogedin] = useState("");
  const [name , setName] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      toast.info("Please Wait", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      fetch("https://pink-extinct-basket-clam.cyclic.app/api/login", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            toast.success(data.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setLogedin(true);
            setName(data.admin.name)
          } else {
            toast.error(data.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      {logedin ? (
        <Adminpanel name={name} / >
      ) : (
        <div className="box">
          <div className="login">
            <h2>Login</h2>
            <form className="LoginForm">
              <div className="Div1">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="Div1">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleLogin}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
