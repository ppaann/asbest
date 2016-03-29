(function () {

    'use strict';

    angular.module('asbest').directive('workSpace', function (){
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'app/js/workspace/workspace.html',
            controller: "workspaceController",
            controllerAs: 'wsCtrl',
            link: function(scope, el, attr){
              console.log(scope);
              $("#sampleDialogContent").mmenu({
                  offCanvas: false,
                  navbar: {
                    title: 'Sample'
                  }
              });
            }
        }

    });
})();