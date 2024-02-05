import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./user/pages/Users";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Users/>
        </Route>
        <Route exact path="/places/new">
        <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
