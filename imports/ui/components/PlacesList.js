import React from 'react';
import { IonSubHeaderBar, IonContent, IonList, IonItem } from 'reactionic';

const PlacesList = () => {
  return (
    <div>
      <IonSubHeaderBar>
        <h1 className="title text-center">Nearby Places</h1>
      </IonSubHeaderBar>
      <IonContent>
        <IonList>
          <IonItem>Test</IonItem>
        </IonList>
      </IonContent>
    </div>
  )
}

export default PlacesList;
