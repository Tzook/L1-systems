/*===========================================================================
** 
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('landing', [])
	.controller('LandingCtrl', ['$scope', 'Head', function($scope, Head) {
		Head.setHead("Integration Solutions",
					"L1-Systems provide creative integration solutions using cutting-edge technologies of various kinds, providing to various nation-level entities.",
					"Integration, Solutions, Technologies, Markets, Intelligence, Aviation, Communication, Safe Cities, Federal Assets, Airports, Borders");
	}]);
})(angular);