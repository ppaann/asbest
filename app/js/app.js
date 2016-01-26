'use strict';

var asbest = angular.module('asbest', ['ngRoute']);

asbest.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'app/templates/allProjects.html',
    }).
    when('/projects', {
      templateUrl: 'app/templates/allProjects.html',
    }).
    when('/project/', {
      templateUrl: 'app/templates/project.html',
    }).
    otherwise ({
      redirectTo: '/'
    });
}]);