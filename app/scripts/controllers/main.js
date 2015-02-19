/*===========================================================================
** 
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('main', [])
	.controller('MainCtrl', ['$scope', '$window', '$interval', '$location', function($scope, $window, $interval, $location) {
		var widthForSmall = '890'; // minimum computer display
		$scope.isSmall = $window.innerWidth < widthForSmall;
		$scope.content = false;
		// watch width in order to switch between phone and computer display
		$interval(function() {
			$scope.isSmall = ($window.innerWidth < widthForSmall);
		}, 500);
		$scope.$on("$routeChangeSuccess", function () {
	    	$scope.content = ($location.path().indexOf('/main') == 0)
		});

	}]);
})(angular);