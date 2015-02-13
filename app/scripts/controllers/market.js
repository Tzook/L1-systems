/*===========================================================================
** 
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('market', [])
	.controller('MarketCtrl', ['$scope', '$location', '$routeParams', '$http', function($scope, $location, $routeParams, $http) {
		$scope.item = {};
		$scope.overview = '';
		$http.get('details/market.json').success(function(data) {
			$scope.overview = data.overview;
			angular.forEach(data.items, function(item) {
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