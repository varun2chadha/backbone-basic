define([
  'jquery',
  'underscore',
  'backbone',
  'views/view',
  
], function($, _, Backbone, UserList){
  var Router = Backbone.Router.extend({
     routes: {
         "": "home" // #help
     }


 });


  var initialize = function(){
    var router = new Router();
    router.on('route:home', function () {
      var userList = new UserList();
     userList.render();
 });
   
 
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});