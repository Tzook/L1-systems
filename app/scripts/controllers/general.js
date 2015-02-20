/*===========================================================================
** 
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('general', [])
	.controller('GeneralCtrl', ['$scope', '$location', '$routeParams', 'Content', 'Head', function($scope, $location, $routeParams, Content, Head) {
		$scope.item = {};
		Content.success(function(data) {		
			angular.forEach((data[0])[$routeParams.part], function(item) {
				if (item.name == $routeParams.item) {
					$scope.item = item;
				}
			});			
			if (!$scope.item.name) {
				$location.path('/landing');
			}
		});
		// Set meta tags for content
		switch ($routeParams.part) {
			case "integration":
				Head.setHead("Integration",
							"L1-Systems supply nation quality security technologies that provide fully covered security solutions for your needs.",
							"Surveillance Solutions, Biometric Management, Command & Control Centers, Perimeter Protection");
				break;
			case "intelligence":
				Head.setHead("Intelligence",
							"L1-Systems brings cutting edge intelligence solutions and services, which amongst others include:Tactial and strategic Integration, Analysis of HUMINT and SIGINT and Cyber security for a range of intelligence solutions.",
							"Cyber Security, SIGINT Protection, Sensors, Covert Platforms, Intelligence Integration, Analytics, Intelligence C&C");
				break;
			case "aviation":
				Head.setHead("Aviation",
							"L1-Systems has fore-front expertise in the aviation field, bringing solutions to many services and systems.",
							"UAVs, SIGINT, Tools, Support, Maintenance, Repair, Platforms");
				break;
			case "communication":
				Head.setHead("Communication",
							"L1-Systems supply cutting-edge nation quality communication technologies that include - telephony networks and radio networks, high quality broadband IP access and Cellular network access, different level of radio frequencies and data encryption.",
							"Infrastructure, Satallite Communication, Radio Communication");
				break;
			default:
				Head.setHead("Market",
							"L1-Systems provides different markets, from federal assets and safe cities up to airports, correctional facilities and maritime structures.",
							"Federal Assets, Safe Cities, Correctional Facilities, Airports, Borders, Maritime, Mobile Infrastructure, Transportation");
		}
	}]);
})(angular);