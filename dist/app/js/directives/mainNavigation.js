(function () {

    'use strict';

    angular.module('asbest').directive('mainNavigation', function (){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/js/directives/mainNavigation.html',
            controller: 'mainNaviController',
            link : function(scope, element, attrs) {
              $(element).mmenu({});
            }
        }

    });
})();