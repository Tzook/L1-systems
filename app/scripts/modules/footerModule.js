/*===========================================================================
** Footerbar module simply creates a footer-bar element, and has info
**  about the authors for the tooltip.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('siteFooterbar', [])
	.controller('FooterController', ['$scope', function($scope) {
		$scope.about = '<p>Website created by: <br>'
		+ '<a target="_blank" href="https://www.linkedin.com/pub/tzook-shaked/a4/230/6a0">Tzook</a>'
		+ ' & <a target="_blank" href="https://www.linkedin.com/pub/noam-elboim/a6/372/a">Noam</a>.<br>'
		+ '<a target="_blank" href="mailto:tzook10@gmail.com">tzook10@gmail.com</a><br>'
		+ '<a target="_blank" href="mailto:noam@mail.com">noam@mail.com</a><br>'
		+ '<a target="_blank" href="https://github.com/Tzook/L1-systems">Source</a></p>';
	}])
	.directive('footerBar', function() { // makes the entire footer-bar in another HTML template
	    return {
		  	restrict: 'E',
		  	template: '<span class="footer-wrap"><a tooltip-html-unsafe="{{::about}}" tooltip-trigger="click" href=""><b>About</b></a></span>',
		  	controller: 'FooterController'
	    };
	});
})(angular);