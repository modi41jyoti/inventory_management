import browserHistory from "browserHistory";
import _ from "lodash";

let userData = [];
let loginUserOrAdmin = [];

const UserService = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(data);
  userData = JSON.parse(localStorage.getItem("user")) || [];
  userData.push(data);
  localStorage.setItem("user", JSON.stringify(userData));
  browserHistory.push("/");
};

const userAdmin = (data) => {
  let users = JSON.parse(localStorage.getItem("user"));
  loginUserOrAdmin = JSON.parse(localStorage.getItem("loginUserAdmin")) || [];
  let userType = _.find(users, function (user) {
    return data.email === user.email || data.email === user.userName;
  });

  if (userType && userType.password === data.password) {
    userType.isLogin = true;
    loginUserOrAdmin.push(userType);
    localStorage.setItem("loginUserOrAdmin", JSON.stringify(loginUserOrAdmin));
    if (userType.type === "admin") {
      browserHistory.push("./admin");
    } else {
      browserHistory.push("./home");
    }
  } else {
    return false;
  }
};
export { UserService, userAdmin };
