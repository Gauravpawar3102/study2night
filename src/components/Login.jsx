import React from 'react';

function Login() {
  return (
    <div className="login-container flex w-screen h-screen">
      <div className="Login-left-container w-3/5 bg-red-100">left</div>

      <div className="Login-right-container w-2/5  justify-center flex flex-col">
        <div className="login-right-toggle flex justify-center p-2 items-center  bg-white">
          <div className="container-toggle bg-slate-100 flex  justify-center px-1 pr-3 py-1 items-center w-max rounded-3xl ">
            <div className="login-toggle  bg-blue-500 px-4 py-1 shadow-lg rounded-3xl  tracking-widest text-white font-semibold   ">
              Login
            </div>
            <div className="signin-toggle tracking-widest text- pl-2 font-semibold  text-slate-500 ">
              Sign in
            </div>
          </div>
        </div>
        <div className="btm  flex justify-center">
          <div className="bottom-container flex flex-col mr-4">
            <div className="login-text ">
              <div className="loginheading text-4xl tracking-widest font-bold my-2">
                Login
              </div>
              <div className="logincomment text-xs ">Login to get Started?</div>
            </div>
            <div className="login-right-main flex flex-col gap-4 mt-6">
              <div className="login-email ">
                <input
                  type="text"
                  className="px-4 py-1 bg-blue-50 rounded-sm placeholder:text-slate-600 outline-none"
                  placeholder="Enter Email or User Name"
                />
              </div>
              <div className="login-password">
                <input
                  type="text"
                  className="px-4 py-1 bg-blue-50 rounded-sm placeholder:text-slate-600 outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="recover-password  text-xs  mt-2 flex justify-end">
              Recover Password ?
            </div>
            <button className="login-cta bg-blue-500 px-4 py-1 shadow-lg rounded-sm w-full mt-6 tracking-widest text-white font-semibold ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
