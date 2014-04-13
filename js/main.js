require.config({

    baseUrl: 'js/lib',
 
    paths: {
        "app": "../apps",
        "router": "../router",
        "collection" : "../collection",
        "views" :"../views",
        "template":"../../templates"
    },
    	shim: {
	'backbone': {
		deps: ['underscore', 'jquery'],
		exports: 'Backbone'
	},
	'underscore': {
		exports: '_'
	},
	}
});

require([

  // Load our app module and pass it to our definition function
  'app/application',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});