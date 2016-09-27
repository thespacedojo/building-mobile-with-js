import React from 'react';
import Tracker from 'tracker-component';
import Places from '/imports/api/Places.js';
import Place from '/imports/ui/components/Place.js';

class PlaceContainer extends Tracker.Component {
  constructor() {
    super();
    this.setState({place: null});
    let id = null;
    this.autorun(() => {
      if (this.props && this.props.params) {
        id = this.props.params.id
      }
      if (id) {
        let place = Places.findOne({_id: id});
        this.setState({place});
      }
    });
  }
  
  componentWillUpdate(nextProps, nextState) {
    // console.log(`Going to update props ${JSON.stringify(nextProps)}`);
    // console.log(`Going to update state ${JSON.stringify(nextState)}`);
    if (nextProps.params && nextProps.params.id)
      this.subscribe('places/one', nextProps.params.id);
  }

  render() {
    if (this.state.place) {
      return <Place place={this.state.place} />
    } else {
      return null
    }
  }
}

export default PlaceContainer;
