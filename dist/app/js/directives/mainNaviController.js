'use strict';

asbest.controller('mainNaviController',
  function mainNaviController($scope,$route, projectData){
    self = this;
    $scope.menuOpen = false;
    self.currentUrl = 

    $scope.homeNaviItems = [
    {
      'name': 'DashBoard',
      'id': 'dashBoard',
      'url': '#/'
    },{
      'name': 'Projects',
      'id': 'projects',
      'url': '#/projects/'
    },{
      'name': 'Schedual',
      'id': 'schedual',
      'url': '#/schedual/'
    },{
      'name': 'Photos',
      'id': 'photos',
      'url': '#/photos/'
    },{
      'name': 'Logs',
      'id': 'logs',
      'url': '#/logs/'
    }
    ];

    self.projects = projectData.getAllProjects();




    $scope.toggleMenu = function(){
      $scope.menuOpen = !$scope.menuOpen;
    };

    $scope.isCurrentRoute = function(projectId){
        return $route.current.params.projectId === projectId ? 'active' : '';
    }
    $scope.isCurrentRoute = function(projectId, floorplanId){
      if(typeof $route.current !== 'undefined')
        return $route.current.params.projectId === projectId && $route.current.params.floorplan === floorplanId ? 'active' : '';
    }
  });