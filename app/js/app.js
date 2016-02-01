'use strict';

var asbest = angular.module('asbest', ['ngRoute','ngAnimate', 'ui.bootstrap']);

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
    when('/project/:projectName/:floorplan', {
      templateUrl: 'app/templates/workspace.html',
      controller: "workspaceController"
    }).
    when('/project/mockup/modelInspection', {
      templateUrl: 'app/templates/modelInspection.html',
      controller: "modelInspectionController"
    }).
    otherwise ({
      redirectTo: '/'
    });
}]);