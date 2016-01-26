'use strict';

asbest.controller('mainNaviController',
  function mainNaviController($scope){
    $scope.menuOpen = false;

    $scope.toggleMenu = function(){
      $scope.menuOpen = !$scope.menuOpen;
    };
  });