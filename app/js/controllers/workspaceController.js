'use strict';

asbest.controller('workspaceController', function($scope, $routeParams, $uibModal, projectData){
    self= this;
    self.photoId = 0;
    var workspace = $('.workspace');

    $scope.floorplan = null;
    $scope.projectId = $routeParams.projectId;
    if($routeParams.floorplan != undefined){
      $scope.floorplan = projectData.getProjectFloorPlan($routeParams.projectId, $routeParams.floorplan);
    }

    $scope.showPhotoDialog = false;
    $scope.photoActivated = false;


    // $scope.onClickImage = function(e){
    //   $(".context-menu").css('display', 'block').offset({top:e.offsetY, left:e.offsetX});
    // }
    // $scope.onInspection = function(){
    //   $(".context-menu").css('display', 'none');
    //   $("#poi_setting").addClass('open');

    //   // var modalInstance = $uibModal.open({
    //   //   animation: true,
    //   //   windowClass: 'asbestDialog',
    //   //   templateUrl: 'app/templates/modelInspection.html',
    //   //   controller: 'modelInspectionController'
    //   // });
    // }
    // $scope.onSample = function(){
    //   $(".context-menu").css('display', 'none');
    //   $("#poi_setting").addClass('open');
    //   // var modalInstance = $uibModal.open({
    //   //   animation: true,
    //   //   windowClass: 'asbestDialog',
    //   //   templateUrl: 'app/templates/modelSample.html',
    //   //   controller: 'modelInspectionController'
    //   // });
    // }

    $scope.openSubmenu = function($event){
        $($event.currentTarget).find('.submenu').toggleClass('open');
    }

    self.movingPOI = function(e){
        var el = $('#' + e.data.ele);
        el.offset({top:e.pageY, left:e.pageX});
    }
    self.dropPOI = function(e){
        workspace.off('mouseup', self.dropPOI);
        $('.note').remove();

        var photoicon = '<span id="photoIcon-temp" style="position: absolute; top: '+e.pageY+'px; left: '+e.pageX+'px;" class="photoPOI glyphicon glyphicon-camera"></span>';
        workspace.after(photoicon);
        if(e.data.ele === 'photoIcon-temp'){
            $scope.showPhotoDialog = true;
        }
    }

    $scope.takePhoto = function($event){
        console.log('takePhoto');
        $scope.photoActivated = true;

        var note = '<div class="note takePhoto"><span class="glyphicon glyphicon-camera"></span>Type on the floorplan to set the photo location</div>';
        workspace.after(note);


        workspace.on('mouseup',{ele: 'photoIcon-temp'}, self.dropPOI);
    }
})