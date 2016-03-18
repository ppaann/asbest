'use strict';

var asbest = angular.module('asbest', ['ngRoute','ngAnimate', 'ui.bootstrap']);

asbest.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'app/templates/dashboard.html',
      controller: ""
    }).
    when('/projects', {
      templateUrl: 'app/templates/allProjects.html',
      controller: "projectsController"
    }).
    when('/project/:projectId', {
      templateUrl: 'app/templates/projectDetail.html',
      controller: "projectDetailController"
    }).
    when('/project/:projectId/:floorplan', {
      templateUrl: 'app/templates/projectWorkspace.html',
    }).
    when('/project/mockup/modelInspection', {
      templateUrl: 'app/templates/modelInspection.html',
      controller: "modelInspectionController"
    }).
    otherwise ({
      redirectTo: '/'
    });
    console.log('log');
}]);