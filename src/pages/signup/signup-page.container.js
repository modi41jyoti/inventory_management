import React from "react";
import SignupPageComponent from "./signup-page.component";
import _ from "lodash";

const Signup = (data) => {
  let password = 0;
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const formData = data;
  const AvailbleEmail = async (e) => {
    await sleep(1000);
    let users = JSON.parse(localStorage.getItem("user"));
    let emailAvailablity = _.filter(users, function (user) {
      return user.email === e;
    });
    if (emailAvailablity.length > 0) return false;
    return true;
  };

  const AvailbleUserName = async (value) => {
    await sleep(1000);
    let users = JSON.parse(localStorage.getItem("user"));
    let userNameAvailablity = _.filter(users, function (user) {
      return user.userName === value;
    });

    if (userNameAvailablity.length > 0) return false;
    return true;
  };

  const PasswordStore = (e) => {
    password = e;
    return true;
  };

  const PasswordMatch = (event) => {
    if (password === event) return true;
    return false;
  };

  return (
    <SignupPageComponent
      AvailbleEmail={AvailbleEmail}
      AvailbleUserName={AvailbleUserName}
      PasswordMatch={PasswordMatch}
      PasswordStore={PasswordStore}
    />
  );
};

export default Signup;
