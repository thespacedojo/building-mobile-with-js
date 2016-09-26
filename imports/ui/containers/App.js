import React from 'react';
import Tracker from 'tracker-component';
import { IonBody } from 'reactionic';
import { getPlatform } from '../../helpers.js';
import { Geolocation } from 'meteor/mdg:geolocation';

class AppContainer extends Tracker.Component {
  constructor() {
    super();
    this.setState({ location: { lat: 0, lng: 0} });
    this.autorun(() => {
      let newLocation = Geolocation.latLng();
      console.log(`Location: ${JSON.stringify(newLocation)}`);
      if (newLocation != this.state.location) {
        this.setState({location: newLocation});
      }
    })
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(`Next State: ${JSON.stringify(nextState)}`);
    if (nextState.location)
      Meteor.call('places/fetch', nextState.location);
  }

  render() {
    let platform = getPlatform('iOS');

    return (
      <IonBody platform={platform} location={this.props.location}>
        { React.cloneElement(this.props.children, {geo: this.state.location}) }
      </IonBody>
    )
  }
}

export default AppContainer;
