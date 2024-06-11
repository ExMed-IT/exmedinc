import React from "react";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import "./style.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home.js";
// import About from "./pages/About.js";
// import Opportunities from "./pages/Opportunities.js";
// import Connect from "./pages/Connect.js";
import Info from "./pages/Info.js";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Wrapper>
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/about" component={About} />
              <Route exact path="/opportunities" component={Opportunities} />
              <Route exact path="/connect" component={Connect} /> */}
            <Route exact path="/internal/info" component={Info} />
          </Switch>
        </Main>
      </Wrapper>{" "}
    </Router>
  );
}

export default App;
