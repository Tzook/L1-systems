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
			Content.success(function(data) {
				$scope.solutions = (data[0])[$scope.part];
			});
		});
	}])
	.directive('sideBar', function() { // makes the entire footer-bar in another HTML template
	    return {
		  	restrict: 'E',
		  	templateUrl: 'partials/side-bar.html',
		  	controller: 'SidebarCtrl'		  	
	    };
	});
})(angular);