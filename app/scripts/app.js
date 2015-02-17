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
	/* convert the string to html format */
	.filter('strToHtml', ['$sce', function($sce) { 
	    return function(string) {
	        return $sce.trustAsHtml(string);
	    };
	}])
	.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider.
		when('/landing', {
			templateUrl: 'partials/landing.html',
			controller: 'LandingCtrl'
		}).
		when('/contact', {
			templateUrl: 'partials/contact.html',
			controller: 'ContactCtrl'
		}).
		when('/main/intelligence', {
			redirectTo: '/main/intelligence/overview'
		}).
		when('/main/integration', {
			redirectTo: '/main/integration/overview'
		}).
		when('/main/communication', {
			redirectTo: '/main/communication/overview'
		}).
		when('/main/aviation', {
			redirectTo: '/main/aviation/overview'
		}).
		when('/main/:part/:item', {
			templateUrl: 'partials/general.html',
			controller: 'MarketCtrl'
		}).		
		otherwise({
			redirectTo: '/landing' // default page
		});
		$locationProvider.html5Mode(true);
	}]);
})(angular);