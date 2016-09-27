import React from 'react';
import { IonContent } from 'reactionic';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const MapComponent = ({loc = {lat: 0, lng: 0}, places, mapChanged, mapSet}) => (
  <IonContent>
    <Map center={[loc.lat, loc.lng]} zoom={16} style={{height: "100%"}} onMoveend={mapChanged}>
      <TileLayer
        onLoad={mapSet}
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {places.map(function(place) {
        return (
          <Marker key={place._id} position={[place.geometry.location.lat,place.geometry.location.lng]}>
            <Popup>
              <span>{place.name}</span>
            </Popup>
          </Marker>
        )
      })}
    </Map>
  </IonContent>
)

export default MapComponent;
