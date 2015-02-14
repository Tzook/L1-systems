/*===========================================================================
** Titlebar module decides which list-item in the titlebar is marked.
** Also opens the modal for 'Forum'.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('siteTitlebar', [])
	.controller('TitlebarCtrl', ['$scope', '$location', function($scope, $location) {
			$scope.titlebar = [
				{"url":"/main/integration", "content": "Intergation", "isClicked": false},
				{"url":"/main/intelligence", "content": "Intelligence", "isClicked": false},
				{"url":"/main/aviation", "content": "Aviation", "isClicked": false},
				{"url":"/main/communication", "content": "Communication", "isClicked": false},
				{"url":"/contact", "content": "Contact Us", "isClicked": false}
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
		  	controller: 'TitlebarCtrl'
	    };
	});
})(angular);