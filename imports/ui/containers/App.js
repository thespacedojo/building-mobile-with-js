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

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update")
    if (this.state.location) {
      console.log('Going to fetch places');
      Meteor.call('places/fetch', this.state.location);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState.location != this.state.location);
    return nextState.location != this.state.location;
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
