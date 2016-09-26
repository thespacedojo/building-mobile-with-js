import React from 'react';
import Tracker from 'tracker-component';
import { IonBody } from 'reactionic';
import { getPlatform } from '../../helpers.js';

class AppContainer extends Tracker.Component {
  render() {
    let platform = getPlatform('iOS');

    return (
      <IonBody platform={platform} location={this.props.location}>
        { this.props.children }
      </IonBody>
    )
  }
}

export default AppContainer;
