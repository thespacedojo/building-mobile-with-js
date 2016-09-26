import { Mongo } from 'meteor/mongo';

const Places = new Mongo.Collection('places');

if (Meteor.isServer)
  Places.rawCollection().createIndex({'point': '2dsphere'}, function() {})

export default Places;
