'use strict';

asbest.controller("projectDetailController",
  function projectDetailController($scope, $routeParams, projectData){
    console.log($routeParams.projectName);
    $scope.project = projectData.getProjectByName($routeParams.projectName);

});