/*===========================================================================
** 
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('main', [])
	.controller('MainCtrl', ['$scope', '$window', '$interval', function($scope, $window, $interval) {
		var widthForSmall = '890'; // minimum computer display
		$scope.isSmall = $window.innerWidth < widthForSmall;

		// watch width in order to switch between phone and computer display
		$interval(function() {
			$scope.isSmall = ($window.innerWidth < widthForSmall);
		}, 500);
	}]);
})(angular);