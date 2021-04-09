import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import User from "../pages/User";
import Movie from "../pages/Movie";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/user" component={User} />
    <Route exact path="/movie" component={Movie} />
  </Switch>
);
