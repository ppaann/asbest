'use strict';

asbest.controller('projectsController',
  function projectsController ($scope, projectData){

    $scope.projects = projectData.getAllProjects();
})