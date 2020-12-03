import AdminComponent from "./admin.component";
import browserHistory from "../../browserHistory";
import _ from "lodash";

const AdminPage = () => {
  const Logout = (event) => {
    let loginUserOrAdmin = JSON.parse(localStorage.getItem("loginUserOrAdmin"));
    let loginUser = JSON.parse(event.view.localStorage.loginUserOrAdmin);
    loginUser[0].isLogin = false;
    console.log(loginUserOrAdmin);
    loginUserOrAdmin = _.dropRightWhile(loginUserOrAdmin, ["isLogin", false]);

    localStorage.setItem("loginUserOrAdmin", loginUserOrAdmin);

    browserHistory.push("/");
  };
  return <AdminComponent Logout={Logout} />;
};

export default AdminPage;
