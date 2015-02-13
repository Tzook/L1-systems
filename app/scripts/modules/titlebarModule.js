/*===========================================================================
** Titlebar module decides which list-item in the titlebar is marked.
** Also opens the modal for 'Forum'.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('siteTitlebar', [])
	.controller('TitlebarController', ['$scope', '$location', function($scope, $location) {
			$scope.titlebar = [
				{"url":"/integration", "content": "intergation", "isClicked": false},
				{"url":"/intelligence", "content": "intelligence", "isClicked": false},
				{"url":"/aviation", "content": "aviation", "isClicked": false},
				{"url":"/communication", "content": "communication", "isClicked": false},
				{"url":"/contact", "content": "contact", "isClicked": false}
			];

			/* check when URL changes */
			$scope.$on("$routeChangeSuccess", function () {
				angular.forEach($scope.titlebar, function(li, index) {
		    		li.isClicked = ($location.path().indexOf(li.url) == 0)
		    	});
			});
	}])
	.directive('titleBar', function() { // makes the entire title-bar in another HTML template
	    return {
		  	restrict: 'E',
		  	templateUrl: 'partials/title-bar.html',
		  	controller: 'TitlebarController'
	    };
	});
})(angular);