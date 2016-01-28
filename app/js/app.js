'use strict';

var asbest = angular.module('asbest', ['ngRoute']);

asbest.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'app/templates/allProjects.html',
      controller: "projectsController"
    }).
    when('/projects', {
      templateUrl: 'app/templates/allProjects.html',
      controller: "projectsController"
    }).
    when('/project/:projectName', {
      templateUrl: 'app/templates/projectDetail.html',
      controller: "projectDetailController"
    }).
    otherwise ({
      redirectTo: '/'
    });
}]);