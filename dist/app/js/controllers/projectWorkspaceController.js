'use strict';

asbest.controller('projectWorkspaceController',
  function projectWorkspaceController($scope, $routeParams, projectData) {
    var floorplan = projectData.getProjectFloorPlan($routeParams.projectId, $routeParams.floorplan);
    var project = projectData.getProjectById($routeParams.projectId);
    $scope.topNaviItems = [{
      'name': 'Dashboard',
      'url': '#/'
    },{
      'name': 'Projects',
      'url': '#/projects',
    },{
      'name': project.name,
      'url': '#/project/' + project.id
    },{
      'name': floorplan.name,
      'url': ''
    }];
});