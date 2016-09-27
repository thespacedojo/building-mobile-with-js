import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Overseer from '/imports/ui/containers/App.js';
import NavBar from '/imports/ui/components/NavBar.js';
import PlacesList from '/imports/ui/containers/PlacesListContainer.js';
import Place from '/imports/ui/containers/Place.js';
import MapContainer from '/imports/ui/containers/Map.js';

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={ Overseer }>
      <Route component={ NavBar }>
        <IndexRoute component={ PlacesList }/>
        <Route path="/place/:id" component={ Place } />
        <Route path="/map" component={ MapContainer } />
      </Route>
    </Route>
  </Router>
)

export { renderRoutes }
