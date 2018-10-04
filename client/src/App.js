import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/articles/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
