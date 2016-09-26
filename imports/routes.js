import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Overseer from '/imports/ui/containers/App.js';
import NavBar from '/imports/ui/components/NavBar.js';
const Places = () => { return <div>Test</div> }

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={ Overseer }>
      <Route component={ NavBar}>
        <IndexRoute component={ Places }/>
      </Route>
    </Route>
  </Router>
)

export { renderRoutes }
