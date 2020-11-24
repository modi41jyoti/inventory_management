import React from "react";
import LoginPageComponent from "./login-page.component";
import _ from "lodash";

const Login = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let userType = 0;
  const singedUpEmail = async (data) => {
    await sleep(1000);
    let users = JSON.parse(localStorage.getItem("user"));
    userType =
      _.find(users, function (user) {
        return data === user.email || data === user.userName;
      }) || 0;
    if (userType) {
      return true;
    }
    return false;
  };
  const passwordVerification = async (data) => {
    await sleep(1000);
    if (userType.password === data) {
      return true;
    }
    return false;
  };
  return (
    <LoginPageComponent
      passwordVerification={passwordVerification}
      singedUpEmail={singedUpEmail}
    />
  );
};

export default Login;
