import React from 'react';

function Login() {
  return (
    <div className="login-container flex w-screen h-screen">
      <div className="Login-left-container w-3/5 bg-red-100">left</div>

      <div className="Login-right-container w-2/5  bg-red-200">
        <div className="login-right-toggle">login /sign in</div>
        <div className="login-text">
          <div className="loginheading">Login</div>
          <div className="logincomment">Login to get Started</div>
        </div>
        <div className="login-right-main ">
          <div className="login-email">
            <input type="text" placeholder="Enter Email or User Name" />
          </div>
          <div className="login-password">
            <input type="text" placeholder="Password" />
          </div>
        </div>
        <div className="recover-password">Recover Password</div>
        <button className="login-cta"> Login </button>
      </div>
    </div>
  );
}

export default Login;
