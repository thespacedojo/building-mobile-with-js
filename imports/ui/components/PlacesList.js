import React from 'react';
import { IonSubHeaderBar, IonContent, IonList, IonItem } from 'reactionic';
import Price from '/imports/ui/components/Price.js';
import Distance from '/imports/ui/components/Distance.js';
import Rating from '/imports/ui/components/Rating.js';

const PlacesList = ({places}) => {
  return (
    <div>
      <IonSubHeaderBar>
        <h1 className="title text-center">Nearby Places</h1>
      </IonSubHeaderBar>
      <IonContent>
        <IonList>
          {places.map((place) => { return <Place key={place._id} place={place} /> })}
        </IonList>
      </IonContent>
    </div>
  )
}

const Place = ({place}) => {
  return (
    <IonItem link={"/place/" + place._id} >
      <div className="row place">
        <div className="col col-90">
          <h2>{place.name}</h2> 
          <p>
            <Price price={place.price_level} />
            <Distance distance={place.distance} />
            <Rating rating={place.rating} />
          </p>
        </div>
      </div>
    </IonItem>
  )
}

export default PlacesList;
