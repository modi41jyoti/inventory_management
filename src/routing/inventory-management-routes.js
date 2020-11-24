import { Route } from "react-router-dom";
import {
  Signup,
  InventoryDetail,
  RestPassword,
  HomePage,
  AdminPage,
} from "pages";

const inventoryManagement = [
  <Route path="/signup" key="signup" component={Signup} />,
  <Route
    path="/invertoryPage"
    key="inventoryPage"
    component={InventoryDetail}
  />,
  <Route path="/restPassword" key="restPassword" component={RestPassword} />,
  <Route path="/home" key="homePage" component={HomePage} />,
  <Route path="/admin" key="adminPage" component={AdminPage} />,
];

export default inventoryManagement;
