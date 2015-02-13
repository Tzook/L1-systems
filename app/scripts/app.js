/*▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬ Main module of the app.	  ▬▬
▬▬ Collects all the modules,  ▬▬
▬▬ creates a filter & configs ▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬*/
(function(angular) {
	'use strict';
	angular.module('myApp', [
		'ngRoute',
		'siteControllers',
		'siteTitlebar',
		'siteFooterbar',
		'siteSidebar',
		'siteHeader'
	])
	.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider.
		when('/landing', {
			templateUrl: 'partials/landing.html',
			controller: 'LandingCtrl'
		}).
		when('/integration', {
			templateUrl: 'partials/integration.html',
			controller: 'IntegrationCtrl'
		}).
		when('/intelligence', {
			templateUrl: 'partials/intelligence.html',
			controller: 'IntelligenceCtrl'
		}).
		when('/aviation', {
			templateUrl: 'partials/aviation.html',
			controller: 'AviationCtrl'
		}).
		when('/communication', {
			templateUrl: 'partials/communication.html',
			controller: 'CommunicationCtrl'
		}).
		when('/contact', {
			templateUrl: 'partials/contact.html',
			controller: 'ContactCtrl'
		}).
		when('/market/:item', {
			templateUrl: 'partials/market.html',
			controller: 'MarketCtrl'
		}).		
		otherwise({
			redirectTo: '/landing' // default page
		});
		$locationProvider.html5Mode(true);
	}]);
})(angular);