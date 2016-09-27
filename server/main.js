import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Places from '/imports/api/Places.js'

Meteor.methods({
  'places/fetch': function(coords) {
    check(coords, {lat: Number, lng: Number});
    this.unblock();
    console.log('Fetching places');
    results = HTTP.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords.lat},${coords.lng}&radius=500&types=restaurant|bar&key=AIzaSyDRawePQWErJ4bL1dV0zwESLF6RgLgBtCY`)
    _(results.data.results).each(function(loc) {
      _.extend(loc, {point: {type: "Point", coordinates: [loc.geometry.location.lng, loc.geometry.location.lat]}})
      Places.upsert({id: loc.id}, {$set: loc})
    });
  }
});

Meteor.publish('places/one', function(id) {
  check(id, String);
  return Places.find({_id: id});
});

Meteor.publish('places/nearby', function(coords) {
  check(coords, {lat: Number, lng: Number});
  let places = Places.aggregate([
    { "$geoNear": {
        "near": {
            "type": "Point",
            "coordinates": [ coords.lng, coords.lat ]
        },
        "maxDistance": 2 * 1609,
        "spherical": true,
        "distanceField": "distance",
        "distanceMultiplier": 0.000621371
    }}
  ]);
  _.each(places, (place) => {
    this.added('places', place._id, place);
  });
  this.ready();
});

Meteor.publish('places/nearbyBox', function(bottomLeft, topRight) {
  return Places.find({point: {$geoWithin: {$box: [bottomLeft, topRight]}}});
});
