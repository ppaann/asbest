'use strict';

asbest.controller('projectsController', 
  function projectsController ($scope){
    $scope.projects = [{
        "name": "Demo Project",
        "address": "Visiokatu 3",
        "city": "Tampere",
        "date": "13/01/16"
      },
      {
        "name": "Renew hall",
        "address": "Yliopistokatu 2",
        "city": "Tampere",
        "date": "12/01/16"
      }];
  
})