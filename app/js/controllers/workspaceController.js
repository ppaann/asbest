'use strict';

asbest.controller('workspaceController', function($scope, $routeParams, $uibModal, projectData){

    $scope.floorplan = null;
    $scope.projectId = $routeParams.projectId;
    if($routeParams.floorplan != undefined){
      $scope.floorplan = projectData.getProjectFloorPlan($routeParams.projectId, $routeParams.floorplan);
    }

    $scope.onClickImage = function(e){
      $(".context-menu").css('display', 'block').offset({top:e.offsetY, left:e.offsetX});
    }
    $scope.onInspection = function(){
      $(".context-menu").css('display', 'none');
      $("#poi_setting").addClass('open');

      // var modalInstance = $uibModal.open({
      //   animation: true,
      //   windowClass: 'asbestDialog',
      //   templateUrl: 'app/templates/modelInspection.html',
      //   controller: 'modelInspectionController'
      // });
    }
    $scope.onSample = function(){
      $(".context-menu").css('display', 'none');
      // var modalInstance = $uibModal.open({
      //   animation: true,
      //   windowClass: 'asbestDialog',
      //   templateUrl: 'app/templates/modelSample.html',
      //   controller: 'modelInspectionController'
      // });
    }

})