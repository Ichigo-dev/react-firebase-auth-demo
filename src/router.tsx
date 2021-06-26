import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Dashboard from './Dashboard'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home></Home></ Route>
        <Route exact path="/dashboard"><Dashboard></Dashboard></Route>
      </Switch>
    </BrowserRouter>
  );
}
