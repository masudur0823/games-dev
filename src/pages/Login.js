import logo from "../assets/images/logo.svg";
import eyeOpen from "../assets/images/icons/eye-open.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    if (showPassword) {
      document.getElementById("password").type = "password";
      setShowPassword(false);
    } else {
      document.getElementById("password").type = "text";
      setShowPassword(true);
    }
  };
  return (
    <div className="login_main">
      <div className="login_div text-white">
        <img src={logo} className="login-logo" alt="" />
        <h1 className="title_two mt-4">Login</h1>
        <h5 style={{ color: "#D9D9D9" }} className="mt-3 mb-4 para_two">
          Welcome Back! Please enter your detail
        </h5>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="input_field text-white w-100"
            placeholder="Enter Username"
          />
          <div className="position-relative mt-4 mb-4">
            <input
              type="password"
              id={'password'}
              className="input_field text-white w-100"
              placeholder="Enter Password"
            />
            <button
              className="input_right_icon"
              onClick={showPasswordHandler}
            >
              {showPassword === false ? (
                <>
                  <img src={eyeOpen} className="cursor-pointer" alt="" />
                  {/* <div className="close_line"></div> */}
                </>
              ) : (
                <>
                  <img src={eyeOpen} className="cursor-pointer" alt="" />
                  <div className="close_line"></div>
                </>
              )}
            </button>
          </div>
          <Link to="/dashboard" className="w-100">
            <input
              type="submit"
              value="Login"
              className="Login_btn text-white"
            />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
