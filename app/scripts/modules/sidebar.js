/*===========================================================================
** Footerbar module simply creates a footer-bar element, and has info
**  about the authors for the tooltip.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('siteSidebar', [])
	.controller('SidebarCtrl', ['$scope', '$location', 'Content', function($scope, $location, Content) {
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
		//	$scope.solutions = solutions[$scope.part];
		
			//var link = 'details/' + $scope.part + '.json';
			Content.success(function(data) {
				$scope.solutions = (data[0])[$scope.part];
			//	console.log($scope.solutions);
				/*if ($scope.solutions && $scope.solutions[0].name == "overview") {
					$scope.solutions.shift();												
				}*/
			//	console.log((data[0])[$scope.part]);
			});
		});
	}])
	.directive('sideBar', function() { // makes the entire footer-bar in another HTML template
	    return {
		  	restrict: 'E',
		  	templateUrl: 'partials/side-bar.html',
		  	controller: 'SidebarCtrl'		  	
	    };
	})/*
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
	})*/;
})(angular);