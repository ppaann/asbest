'use strict';

asbest.controller('projectsController',
  function projectsController ($scope, projectData){
     $scope.topNaviItems = [{
      'name': 'Dashboard',
      'url': '#/'
    },{
      'name': 'Projects',
      'url': ''
    }];
    $scope.projects = projectData.getAllProjects();
})