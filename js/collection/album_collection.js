define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var Album = Backbone.Collection.extend({

    url: "/data/data.json"
 });

  // You don't usually return a collection instantiated
  return Album;
});