import React from 'react';
import Tracker from 'tracker-component';
import Places from '/imports/api/Places.js';
import PlacesList from '/imports/ui/components/PlacesList.js';

class PlacesListContainer extends Tracker.Component {
  constructor() {
    super();
    this.setState({places: []})
    this.autorun(() => {
      if (this.props && this.props.geo) {
        this.subscribe('places/nearby', this.props.geo);
        let places = Places.find().fetch();
        this.setState({places});
      }
    });
  }

  render() {
    return <PlacesList places={this.state.places} />
  }
}

export default PlacesListContainer;
