'use strict';

asbest.controller('workspaceController', function($scope, $routeParams, $uibModal, $sce, projectData){
    self= this;
    self.photoId = 0;
    self.popover = {
        photo: $sce.trustAsHtml('<div class="note takePhoto"><span class="glyphicon glyphicon-camera"></span>Type on the photo location</div>'),
        sample: $sce.trustAsHtml('<div class="note takeSample"><span class="glyphicon glyphicon-filter"></span>Type on the sample location</div>'),
    }
    self.poiData = [
        {
            'name': 'PO',
            'description': 'Palo ovi'
        },{
            'name': 'PE',
            'description': 'Putki eriste'
        },{
            'name': 'P',
            'description': 'Lattian pikiliima'
        },{
            'name': 'FF',
            'description': 'Lattian vinyylilatta'
        },{
            'name': 'ML',
            'description': 'Magnesiamassalattia'
        }
    ];
    self.currentPOI = self.poiData[0].name;

    var workspace = $('.workspace');

    $scope.floorplan = null;
    $scope.projectId = $routeParams.projectId;
    if($routeParams.floorplan != undefined){
      $scope.floorplan = projectData.getProjectFloorPlan($routeParams.projectId, $routeParams.floorplan);
    }

    $scope.showPhotoDialog = false;
    $scope.photoActivated = false;
    $scope.sampleActivated = false;
    $scope.showSampleDialog = false;
    $scope.showPOIDialog = false;
    $scope.poiActivated = false;


    $scope.openSubmenu = function($event){
        $($event.currentTarget).find('.submenu').toggleClass('open');
    }

    self.movingPOI = function(e){
        var el = $('#' + e.data.ele);
        el.offset({top:e.pageY, left:e.pageX});
    }
    self.dropPOI = function(e){
        console.log('drop');
        workspace.off('mouseup', self.dropPOI);
        $('.note').remove();

        if(e.data.ele === 'photoIcon-temp'){
            var photoicon = '<span id="photoIcon-temp" style="position: absolute; top: '+e.pageY+'px; left: '+e.pageX+'px;" class="photoPOI glyphicon glyphicon-camera"></span>';
            $scope.photoActivated = false;
            $scope.showPhotoDialog = true;
            workspace.after(photoicon);
        }
        else if(e.data.ele === 'sampleIcon-temp'){
            var sampleicon = '<span id="sampleIcon-temp" style="position: absolute; top: '+e.pageY+'px; left: '+e.pageX+'px;" class="samplePOI glyphicon glyphicon-filter"></span>';
            $scope.sampleActivated = false;
            $scope.showSampleDialog = true;
            workspace.after(sampleicon);
        }
        else if(e.data.ele === 'poiIcon-temp'){
            var poiIcon = '<span style="position: absolute; top: '+ e.pageY+'px; left: '+e.pageX+
                            'px;"><div class="poi"><span class="content">'+
                            self.currentPOI+'</span></div></span>';
            $scope.poiActivated = false;
            workspace.after(poiIcon);
        }
    }
    self.onDropPoi= function() {
        $scope.showPOIDialog = false;
        $scope.poiActivated = false;
    }

    $scope.takePhoto = function($event){
        console.log('takePhoto');
        $scope.photoActivated = true;

        workspace.on('mouseup',{ele: 'photoIcon-temp'}, self.dropPOI);
    }
    $scope.takeSample = function($event){
        console.log('takeSample');
        $scope.sampleActivated = true;
        workspace.on('mouseup',{ele: 'sampleIcon-temp'}, self.dropPOI);
    }
    $scope.onPOISelected = function() {
        console.log('onPOISelected', this, this.item);
        $scope.showPOIDialog = false;
        $scope.poiActivated = true;
        self.currentPOI = this.item.name;

        workspace.on('mouseup',{ele: 'poiIcon-temp'}, self.dropPOI);
    }
})