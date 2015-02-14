/*===========================================================================
** 
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('market', [])
	.controller('MarketCtrl', ['$scope', '$location', '$routeParams', '$http', function($scope, $location, $routeParams, $http) {
		$scope.item = {};
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