import { Router, Route, Link, Switch } from "react-router-dom";
import browserHistory from "./browserHistory";
import { inventoryManagement } from "./routing";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { Login } from "./pages";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Switch>
          {inventoryManagement}
          <Route path="/" key="login" component={Login} />,
          <Route exact key="*" path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;

const NoMatch = () => {
  return <h1>No Match</h1>;
};
