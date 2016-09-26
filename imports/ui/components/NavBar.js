import React from 'react';
import { IonHeaderBar, IonView, IonNavView } from 'reactionic';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <IonHeaderBar customClasses="bar-assertive" alignTitle="center" title={<img src="/images/cityforks-03.png" className="logo" alt="CITYFORKS" />} />
        <IonNavView>
          <IonView {...this.props}>
            {this.props.children}
          </IonView>
        </IonNavView>
      </div>
    )
  }
}

export default NavBar;
