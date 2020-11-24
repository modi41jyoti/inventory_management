import HomeComponent from "./home.component";
import browserHistory from "../../browserHistory";
import _ from "lodash";
const HomePage = () => {
  const Logout = (event) => {
    let loginUserOrAdmin = JSON.parse(localStorage.getItem("loginUserOrAdmin"));
    let loginUser = JSON.parse(event.view.localStorage.loginUserOrAdmin);
    let logOutUser = _.filter(loginUserOrAdmin, function (e) {
      return loginUser[0].email === e.email;
    });

    logOutUser[0].isLogin = false;
    loginUserOrAdmin = _.dropRightWhile(loginUserOrAdmin, ["isLogin", false]);
    localStorage.setItem("loginUserOrAdmin", loginUserOrAdmin);
    browserHistory.push("/");
  };
  return <HomeComponent Logout={Logout} />;
};

export default HomePage;
