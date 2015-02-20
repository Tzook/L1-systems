/*===========================================================================
** Footerbar module simply creates a footer-bar element, and has info
**  about the authors for the tooltip.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('siteSidebar', [])
	.controller('SidebarCtrl', ['$scope', '$location', 'solutions', '$http', function($scope, $location, solutions, $http) {
		$scope.solutions = '';
		$scope.part = '';
		$scope.status = {
			open: true,
			openMarket: false
		};
		$scope.$on("$routeChangeSuccess", function () {
			$scope.status.open = true;
			if ($scope.isSmall) {
				$scope.status.open = false;
				$scope.status.openMarket = false;
			}
			var split = $location.path().split('/');
			$scope.part = split[2];			
			$scope.solutions = solutions[$scope.part];
/*
			var link = 'details/' + $scope.part + '.json';
			$http.get(link).success(function(data) {
				$scope.solutions = data;
				$scope.solutions.shift();							
				console.log(data);
			});*/
		});
	}])
	.directive('sideBar', function() { // makes the entire footer-bar in another HTML template
	    return {
		  	restrict: 'E',
		  	templateUrl: 'partials/side-bar.html',
		  	controller: 'SidebarCtrl'		  	
	    };
	})
	.constant('solutions', {
		"intelligence":[
			"Cyber Security",
			"SIGINT Protection",
			"Sensors",
			"Covert Platforms",
			"Intelligence Integration",
			"Analytics",
			"Intelligence C&C"
		],
		"integration": [
			"Surveillance Solutions",
			"Biometric Management",
			"Command & Control Centers",
			"Perimeter Protection"
		],
		"communication": [
			"Infrastructure",
			"Satallite Communication",
			"Radio Communication"
		],
		"aviation" : [
			"UAVs",
			"SIGINT",
			"Tools, Equipment & Components",
			"Support, Maintenance, Repair",
			"Platforms"
		]
	});
})(angular);