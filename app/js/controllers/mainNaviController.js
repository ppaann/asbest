'use strict';

asbest.controller('mainNaviController',
  function mainNaviController($scope, projectData){
    $scope.menuOpen = false;

    $scope.toggleMenu = function(){
      $scope.menuOpen = !$scope.menuOpen;
    };
    $scope.projects = projectData.getAllProjects();
  });