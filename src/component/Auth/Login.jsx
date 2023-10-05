import React, { useState } from "react";
import Adminpanel from "../Adminpanel/Adminpanel.js";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logedin, setLogedin] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
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
            console.log(data.success);
            // navigate("/adminpanel");
            setLogedin(true);
          }
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {logedin ? (
        <Adminpanel />
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
