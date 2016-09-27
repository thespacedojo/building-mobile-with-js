import React from 'react';
import { IonSubHeaderBar, IonContent, IonList, IonItem, IonIcon } from 'reactionic';
import Price from '/imports/ui/components/Price.js';
import Distance from '/imports/ui/components/Distance.js';
import Rating from '/imports/ui/components/Rating.js';

class Place extends React.Component {
  constructor() {
    super();
    this.photo = this.photo.bind(this);
  }

  photo() {
    if (this.props.place.photos) {
      return `url(https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${this.props.place.photos[0].photo_reference}&key=AIzaSyCtfoCAldCEf8hXUlkVUd4UljqKR6W_aF4)`
    } else {
      return null;
    }
  }
  render() {
    let place = this.props.place;
    return (
      <div>
        <IonSubHeaderBar>
          <h1 className="title text-center">Details</h1>
        </IonSubHeaderBar>
        <IonContent>
          <div className="place-info">
            <div style={{backgroundImage: this.photo()}} className="place-photo"></div>
            <div className="row">
              <div className="col">
                <h3>{place.name}</h3>
                <OpenNow open={place.opening_hours} />
              </div>
            </div>
            <div className="row meta-info">
              <div className="col">
                <Price price={place.price_level} />
              </div>
              <div className="col">
                <Rating rating={place.rating} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="info-section">
                  <span className="meta">Address</span>
                  <p>{place.vicinity}</p>
                </div>

                <div className="info-section">
                  <span className="meta">Tags</span>
                  <p className="tags">{place.types.join(', ').replace(/_/g, ' ')}</p>
                </div>
              </div>
            </div>
          </div>
        </IonContent>
      </div>
    )
  }
}

class OpenNow extends React.Component {
  render() {
    if (this.props.open.open_now) {
      return (
        <div>
          <div className="open-circ"></div>
          <span className="open">Open</span>
        </div>
      )
    } else {
      return (
        <div>
          <div className="closed-circ"></div>
          <span className="closed">Closed</span>
        </div>
      )
    }
  }
}

OpenNow.defaultProps = { open_now: false }

export default Place;
