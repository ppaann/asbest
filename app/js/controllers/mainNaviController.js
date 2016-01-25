'use strict';

asbest.controller('mainNaviController',
  function MainNaviController($scope){
    $scope.menuOpen = false;
    $scope.toggleMenu = function(){
      $scope.menuOpen = !$scope.menuOpen;
    }
  });