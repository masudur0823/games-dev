import logo from "../assets/images/logo.svg";
import eyeOpen from "../assets/images/icons/eye-open.svg";

function Login() {
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
              type="text"
              className="input_field text-white w-100"
              placeholder="Enter Password"
            />
            <button className="input_right_icon">
              <img
                src={eyeOpen}
                className="cursor-pointer"
                alt=""
              />
            </button>
          </div>
          <input type="submit" value="Login" className="Login_btn text-white" />
        </form>
      </div>
    </div>
  );
}

export default Login;
