import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"
import "./style.css";

function App() {
  return (
    <Router basename="/">
      <div className="grad-bg">
        <Wrapper>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      </div>
    </Router >
  );
}

export default App;
