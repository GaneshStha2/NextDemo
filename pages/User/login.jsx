import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { userLoginPost } from "../../services/User/userServices"
export default function login() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const userOnLogin = () => {
    userLoginPost(userLogin)
      .then((result) => {
       
      if(result.data.data==true){
        router.push("/User/dashboard");
      }
      else {
        setErrorMessage(result.data.message);
      }
      })
      .catch(() => {});
  };
  const onRegister = () => {
    router.push("/User/userSignup");
  };
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
                <input
                  type="email"
                  id="form1Example13"
                  value={userLogin.email}
                  onChange={(e) => {
                    setUserLogin({ ...userLogin, email: e.target.value });
                  }}
                  className="form-control form-control-lg"
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
                <input
                  type="password"
                  id="form1Example23"
                  value={userLogin.password}
                  onChange={(e) => {
                    setUserLogin({ ...userLogin, password: e.target.value });
                  }}
                  className="form-control form-control-lg"
                />
              </div>
              {errorMessage && (
  <p className="error" style={{color:"red"}}> {errorMessage} </p>
)}

              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>

              <button
                type="button"
                onClick={userOnLogin}
                className="btn btn-primary btn-lg btn-block"
              >
                Sign in
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a
                className="btn btn-primary btn-lg btn-block"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
                onClick={onRegister}
              >
                <i className="fab fa-facebook-f me-2"></i>Register
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
