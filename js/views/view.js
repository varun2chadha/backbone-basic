define([
  'jquery',
  'underscore',
  'backbone',
  'text!template/temp.html',
  'collection/album_collection'
], function($, _, Backbone, myTemplate, Album){

   var UserList = Backbone.View.extend({
     el: '.page',

     template : _.template(myTemplate),
     render: function () {
         var that = this;
         var album = new Album();
         album.fetch({
             success: function (album) {
                var _data = {data: album.models};
                $(that.el).html(that.template(_data));
            }
         })


     }

 });

  // Our module now returns our view
  return UserList;
});