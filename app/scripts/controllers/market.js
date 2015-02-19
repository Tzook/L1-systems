/*===========================================================================
** 
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('market', [])
	.controller('MarketCtrl', ['$scope', '$location', '$routeParams', '$http', 'Head', function($scope, $location, $routeParams, $http, Head) {
		$scope.item = {};
		Head.setHead("Market",
					"L1-Systems provides different markets, from federal assets and safe cities up to airports, correctional facilities and maritime structures.",
					"Federal Assets, Safe Cities, Correctional Facilities, Airports, Borders, Maritime, Mobile Infrastructure, Transportation");
		var link = 'details/' + $routeParams.part + '.json';
		$http.get(link).success(function(data) {			
			angular.forEach(data, function(item) {
				if (item.name == $routeParams.item) {
					$scope.item = item;
				}
			});			
			if (!$scope.item.name) {
				$location.path('/landing');
			}
		});
	}]);
})(angular);