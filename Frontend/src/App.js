import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import {
  Redirect,
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const RouteAuthenticated = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("user") ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to="/signin" />
      )
    }
  />
);
function App() {
  const [filterVal, setFilterVal] = useState("");
  const history = useHistory();
  const handleOfficeValue = (e) => {
    setFilterVal(e);
  };

  return (
    <>
      <Header />
      <div className="main-container">
        {window.location.pathname === "/" && history.push("/signin")}
        {window.location.pathname === "/signin" ||
          window.location.pathname === "/signup" || (
            <Sidebar officeValue={(e) => handleOfficeValue(e)} />
          )}
        <Router>
          <Switch>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>

          <RouteAuthenticated
            exact
            path={"/dashboard"}
            component={Dashboard}
            filterVal={filterVal}
          />
        </Router>
      </div>

      <Footer />
    </>
  );
}

export default App;
