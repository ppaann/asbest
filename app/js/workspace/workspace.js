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

                //  Choose place
                var $set_location = $("#place .mm-counter");
                $("#option-place").find( "li span" ).click(function() {
                  $set_location.text( $(this).text() );
                  api.openPanel( $settings );
                });
                //  Choose product
                var $set_product = $("#product .mm-counter");
                $("#option-product").find( "li span" ).click(function() {
                  $set_product.text( $(this).text() );
                  api.openPanel( $settings );
                });
                //  Choose amount
                var $set_amount = $("#amount .mm-counter");
                $("#option-amount").find( "li span" ).click(function() {
                  $set_amount.text( $(this).text() );
                  api.openPanel( $settings );
                });
                //  Choose amount
                var $set_unit = $("#unit .mm-counter");
                $("#option-unit").find( "li span" ).click(function() {
                  $set_unit.text( $(this).text() );
                  api.openPanel( $settings );
                });
              });

              $('#poi-dialog-menu').mmenu({
                offCanvas : false,
                extensions  : ["theme-white"],
                navbar    : {
                  title : "POI"
                },
                navbars   : true,
              });
            }
        };

    });
})();