import React from "react";
import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";

import { userLogin } from "../api/authorization";

import swal from "sweetalert";

const SignIn = () => {
  const userRef = useRef(null);
  const errRef = useRef(null);
  const history = useHistory();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // useEffect(() => {
  //   //userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      email: user,
      password: pwd,
    };

    let authorization = await userLogin("/login", data);

    if (authorization) {
      swal({
        title: authorization.user.first_name + ",You are Successfully login",
        icon: "success",
        button: "Done",
        type: "success",
      }).then((success) => {
        window.location.href = "/dashboard";
      });
      localStorage.setItem("user", JSON.stringify(authorization));
      setUser("");
      setPwd("");
    }
  };

  return (
    <>
      {localStorage.getItem("user") ? (
        history.push("/dashboard")
      ) : (
        <Container className="mt-5 text-center">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <Form
            onSubmit={handleSubmit}
            className="text-center"
            style={{ width: "27%", marginLeft: "36%" }}
          >
            <h3>Sign In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                id="username"
                ref={userRef}
                current-password="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                className="form-control"
                placeholder="Enter password"
                required
              />
            </div>

            <div className="d-grid">
              <Button type="submit" className="btn btn-primary">
                Submit
              </Button>
            </div>

            <p className=" text-left">
              Need an Account? <a href="/Signup">Sign Up</a>
            </p>
          </Form>{" "}
        </Container>
      )}
    </>
  );
};

export default SignIn;
