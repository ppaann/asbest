'use strict';

asbest.controller('workspaceController', function($scope, $routeParams, $uibModal, $sce, projectData){
    self= this;
    self.photoId = 0;
    self.popover = {
        photo: $sce.trustAsHtml('<div class="note takePhoto"><span class="glyphicon glyphicon-camera"></span>Type on where the photo is taken</div>'),
        sample: $sce.trustAsHtml('<div class="note takeSample"><span class="glyphicon glyphicon-filter"></span>Type on where the sample is taken</div>'),
    }
    var workspace = $('.workspace');

    $scope.floorplan = null;
    $scope.projectId = $routeParams.projectId;
    if($routeParams.floorplan != undefined){
      $scope.floorplan = projectData.getProjectFloorPlan($routeParams.projectId, $routeParams.floorplan);
    }

    $scope.showPhotoDialog = false;
    $scope.photoActivated = false;
    $scope.sampleActivated = false;



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

        if(e.data.ele === 'photoIcon-temp'){
            $scope.showPhotoDialog = true;
            var photoicon = '<span id="photoIcon-temp" style="position: absolute; top: '+e.pageY+'px; left: '+e.pageX+'px;" class="POI glyphicon glyphicon-camera"></span>';
            workspace.after(photoicon);
        }
        else if(e.data.ele = 'sampleIcon-temp'){
            var sampleicon = '<span id="sampleIcon-temp" style="position: absolute; top: '+e.pageY+'px; left: '+e.pageX+'px;" class="POI glyphicon glyphicon-filter"></span>';
            workspace.after(sampleicon);
            self.openSampleDialog();
        }
    }
    self.openSampleDialog = function(){
        
    }

    $scope.takePhoto = function($event){
        console.log('takePhoto');
        $scope.photoActivated = true;

        workspace.on('mouseup',{ele: 'photoIcon-temp'}, self.dropPOI);
    }
    $scope.takeSample = function($event){
        console.log('takePhoto');
        $scope.sampleActivated = true;

        workspace.on('mouseup',{ele: 'sampleIcon-temp'}, self.dropPOI);
    }
})