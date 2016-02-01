'use strict';

asbest.controller('mainNaviController',
  function mainNaviController($scope,$route, projectData){
    $scope.menuOpen = false;
    $scope.projects = projectData.getAllProjects();

    $scope.toggleMenu = function(){
      $scope.menuOpen = !$scope.menuOpen;
    };

    $scope.isCurrentRoute = function(projectId){
        return $route.current.params.projectId === projectId ? 'active' : '';
    }
    $scope.isCurrentRoute = function(projectId, floorplanId){
        return $route.current.params.projectId === projectId && $route.current.params.floorplan === floorplanId ? 'active' : '';
    }
  });