define(['angular', 'Controllers', 'Filters', 'Services', 'Directives'],
       function(angular) {
	var app = angular.module('myApp', [
	  'myApp.controllers',
		'myApp.filters',
		'myApp.services',
		'myApp.directives'
	]);

	app.config(function ($routeProvider, $locationProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/Welcome',
				controller: 'WelcomeCtrl',
				reloadOnSearch: false
			}).
			when('/Creations', {
				templateUrl: 'partials/Creations',
				controller: 'CreationsCtrl',
				reloadOnSearch: false
			}).
			when('/Posts', {
				templateUrl: 'partials/Posts',
				controller: 'PostsCtrl',
				reloadOnSearch: false
			}).
			when('/About', {
				templateUrl: 'partials/About',
				controller: 'AboutCtrl',
				reloadOnSearch: false
			}).
			otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	});

	return app;
});