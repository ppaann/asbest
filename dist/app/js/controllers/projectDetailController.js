'use strict';

asbest.controller("projectDetailController",
  function projectDetailController($scope, $routeParams, projectData){
    $scope.project = projectData.getProjectById($routeParams.projectId);
    $scope.topNaviItems = [{
      'name': 'Dashboard',
      'url': '#/'
    },{
      'name': 'Projects',
      'url': '#/projects',
    },{
      'name': $scope.project.name,
      'url': ''
    }];
});