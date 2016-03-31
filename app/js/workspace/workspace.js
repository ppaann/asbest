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
              $("#sampleDialogMenu")
                .mmenu({
                    offCanvas : false,
                    extensions  : ["theme-white"],
                    navbar    : {
                      title : "Sample"
                    },
                    navbars   : true,
                    onClick   : {
                      setSelected : false
                    }
                }).on( 'click',
                  'a[href^="#/"]',
                  function() {
                    alert( "Thank you for clicking, but that's a demo link." );
                    return false;
                  }
                );
              $(function() {
                var $settings = $("#app");

                var api = $("#sampleDialogMenu").data( "mmenu" );

                //  Choose location
                var $set_location = $("#setting-location .mm-counter");
                $("#locations").find( "li span" ).click(function() {
                  $set_location.text( $(this).text() );
                  api.openPanel( $settings );
                });

              });
      
            }
        };

    });
})();