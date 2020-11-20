import { Route } from "react-router-dom";
import { Signup, InventoryDetail, RestPassword } from "pages";

const inventoryManagement = [
  <Route path="/signup" key="signup" component={Signup} />,
  <Route
    path="/invertoryPage"
    key="inventoryPage"
    component={InventoryDetail}
  />,
  <Route path="/restPassword" key="restPassword" component={RestPassword} />,
];

export default inventoryManagement;
