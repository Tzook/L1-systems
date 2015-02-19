/*===========================================================================
** Footerbar module simply creates a footer-bar element, and has info
**  about the authors for the tooltip.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('siteSidebar', [])
	.controller('SidebarCtrl', ['$scope', '$location', 'solutions', function($scope, $location, solutions) {
		$scope.solutions = '';
		$scope.part = '';
		$scope.openSol = true;
		$scope.$on("$routeChangeSuccess", function () {
			$scope.openSol = true;
			var split = $location.path().split('/');
			$scope.part = split[2];
			
			$scope.solutions = solutions[$scope.part];			
			$scope.openMark = $scope.solutions ? true : false; 
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
			"Infrastraction",
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