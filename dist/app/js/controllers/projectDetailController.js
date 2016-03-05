'use strict';

asbest.controller("projectDetailController",
  function projectDetailController($scope, $routeParams, projectData){
    $scope.project = projectData.getProjectById($routeParams.projectId);
});