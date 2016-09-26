import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Overseer from '/imports/ui/containers/App.js';
import NavBar from '/imports/ui/components/NavBar.js';
import PlacesList from '/imports/ui/components/PlacesList.js';

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={ Overseer }>
      <Route component={ NavBar }>
        <IndexRoute component={ PlacesList }/>
      </Route>
    </Route>
  </Router>
)

export { renderRoutes }
