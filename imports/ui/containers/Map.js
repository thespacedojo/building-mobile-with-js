import React from 'react';
import Tracker from 'tracker-component';
import Places from '/imports/api/Places.js';
import MapComponent from '/imports/ui/components/Map.js';

class MapContainer extends Tracker.Component {
  constructor() {
    super();
    this.mapSet = this.mapSet.bind(this);
    this.mapChanged = this.mapChanged.bind(this);
    this.setMapState = this.setMapState.bind(this);
    this.setState({places: []});
    this.setState({topRight: [0,0], bottomLeft: [0, 0]});
    this.autorun(() => {
      this.subscribe('places/nearbyBox', this.state.bottomLeft, this.state.topRight);
      let places = Places.find().fetch();
      this.setState({places});
    });
  }

  mapSet(event) {
    console.log('Map set');
    this.setMapState(event.target._map);
  }

  mapChanged(event) {
    this.setMapState(event.target);
    let newCenter = event.target.getCenter();
    Meteor.call('places/fetch', newCenter, (err, res) => {this.setState({fetchingData: false})});
  }

  setMapState(target) {
    let bounds = target.getBounds();
    let bottomLeft = [bounds._southWest.lng, bounds._southWest.lat];
    let topRight = [bounds._northEast.lng, bounds._northEast.lat];
    this.setState({topRight: topRight, bottomLeft: bottomLeft})
  }

  render() {
    if (this.props.geo) {
      return <MapComponent places={this.state.places} loc={this.props.geo} mapSet={this.mapSet} mapChanged={this.mapChanged}/>
    } else {
      return null
    }
  }
}

export default MapContainer; 
