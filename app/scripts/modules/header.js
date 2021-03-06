/*===========================================================================
** Header module - change header tags responsivly.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('siteHeader', [])
	.factory('Head', function () {
		var title ='', des = '', keywords = '';
		return {
			getTitle: function () { return title; },
			getMetaDes: function () { return des; },
			getMetaKey: function () { return keywords; },
			// Change title, meta description and keywords
			setHead: function (str1, str2, str3) {
				title = "L1-Systems - " + str1;
				des = str2;
				keywords = str3;
			}
		};
	})
	.controller('HeaderCtrl', ['$scope', 'Head', function($scope, Head) {
		$scope.Head = Head;
	}]);;
})(angular);