'use strict';

var asbest = angular.module('asbest', ['ngRoute']);

asbest.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/project', {
      templateUrl: 'app/htmls/project.html',
    }).
    otherwise ({
      redirectTo: '/project'
    });
}]);