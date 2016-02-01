'use strict';

asbest.controller('workspaceController', function($scope, $routeParams, $uibModal, projectData){

    $scope.floorplan = null;
    if($routeParams.floorplan != undefined){
      $scope.floorplan = projectData.getProjectFloorPlan($routeParams.projectName, $routeParams.floorplan);
    }
    console.log($scope.floorplan);

    $scope.onClickImage = function(e){
      $(".context-menu").css('display', 'block').offset({top:e.offsetY, left:e.offsetX});
    }
    $scope.onInspection = function(){
      var modalInstance = $uibModal.open({
        animation: true,
        windowClass: 'asbestDialog',
        templateUrl: 'app/templates/modelInspection.html',
        controller: 'modelInspectionController'
      });

    }
    $scope.onSample = function(){
      var modalInstance = $uibModal.open({
        animation: true,
        windowClass: 'asbestDialog',
        templateUrl: 'app/templates/modelSample.html',
        controller: 'modelInspectionController'
      });
    }

})