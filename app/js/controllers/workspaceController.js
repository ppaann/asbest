'use strict';

asbest.controller('workspaceController', function($scope, $routeParams, $uibModal, projectData){

    $scope.floorplan = null;
    if($routeParams.floorplan != undefined){
      $scope.floorplan = projectData.getProjectFloorPlan($routeParams.projectName, $routeParams.floorplan);
    }
    console.log($scope.floorplan);

    $scope.onClickImage = function(e){
      console.log(e, e.x, e.y, e.offsetX, e.offsetY);
      $(".context-menu").css('display', 'block').offset({top:e.offsetY, left:e.offsetX});
    }
    $scope.onInspection = function(){
      console.log("inspec");
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/templates/modelInspection.html',
        //controller: 'modelInspectionController'
      });

    }
    $scope.onSample = function(){
      console.log("sample");
    }
    
})