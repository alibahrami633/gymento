import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper"
import "./style.css";

function App() {
  return (
    <Router basename="/">
      <div className="grad-bg">
        <Wrapper>
          <Nav />
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      </div>
    </Router >
  );
}

export default App;
