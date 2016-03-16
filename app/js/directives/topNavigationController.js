'use strict';

asbest.controller('topNavigationController',
  function topNavigationController($scope, $route, projectData){
    $scope.items = [{
      'name': 'Projects',
      'url' : '#/projects'
    },
    {
      'name': 'Demo Oy',
      'url': '#/project/1'
    } ,
    {
      'name': 'floorplan 1',
      'url': ''
    }];
    console.log($route);

  });