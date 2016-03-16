(function () {

    'use strict';

    angular.module('asbest').directive('topNavigation', function (){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/js/directives/topNavigation.html',
            controller: 'topNavigationController',
        }

    });
})();