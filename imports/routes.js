import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Overseer from '/imports/ui/containers/App.js';
const Places = () => { return null }

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={ Overseer }>
      <IndexRoute component={ Places }/>
    </Route>
  </Router>
)

export { renderRoutes }
