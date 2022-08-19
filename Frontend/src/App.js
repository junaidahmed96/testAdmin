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

const Authentication = ({ Component, props }) => {
  let auth = localStorage.getItem("user");
  let location = useLocation();
  if (!auth) {
    return <Redirect to="/signin" state={{ from: location }} />;
  }
  return <Component filterVal={props} />;
};

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
          {/* <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} /> */}

          <Route element={<Authentication />}>
            <Route path="/dashboard">
              <Dashboard filterVal={filterVal} />
            </Route>
          </Route>
        </Router>
      </div>

      <Footer />
    </>
  );
}

export default App;
